import type { NextPage, GetStaticProps } from "next";
import parse from "html-react-parser";

import useFetchNews, { INITIAL_PAGE } from "../helpers/useFetchNews";
import fetchNews from "../helpers/fetchNews";

import HeaderNav from "../components/HeaderNav";
import Landing from "../components/Landing";
import Story from "../components/Story";
import FeaturesSlider from "../components/FeaturesSlider";
import CharactersSlider from "../components/CharactersSlider";
import Gallery from "../components/Gallery";
import News from "../components/News";
import FooterNav from "../components/FooterNav";
const Home: NextPage<{
  gallery: {
    title: string;
    images: {
      url: string;
      title: string;
      id: string;
    }[];
  };
  story: {
    intro: string;
    title: string;
    background: string;
    content: string;
  };
  features: {
    title: string;
    subtitle: string;
    featureImages: {
      url: string;
      id: string;
      title: string;
    }[];
  };
  characters: {
    title: string;
    subtitle: string;
    charactersContent: {
      characterImageUrl: string;
      id: string;
      title: string;
      description: string;
    }[];
  };
  news: {
    title: string;
    date: string;
    content: string;
    id: string;
  }[];
}> = ({ gallery, story, features, characters, news }) => {
  const [articles, onLoadMore, loading, error] = useFetchNews(news);
  return (
    <main className="container mx-auto">
      <HeaderNav />
      <Landing />
      <Story {...story}>
        <div className="text-center">{parse(story.content)}</div>
      </Story>
      <FeaturesSlider {...features} />
      <CharactersSlider {...characters} />
      <Gallery {...gallery} />
      <News {...{ articles, onLoadMore, loading, error }} />
      <FooterNav />
    </main>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const galleryResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/20"
  );
  const gallery = await galleryResponse.json();
  const parseGallery = () => {
    const {
      title: { rendered },
      acf,
    } = gallery;
    const images = Object.keys(acf).map((key) => {
      const { url, id, alt } = acf[key];
      return { url, id, title: alt };
    });
    return {
      title: rendered,
      images,
    };
  };

  const storyResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/16?_embed"
  );
  const story = await storyResponse.json();
  const parseStory = () => {
    const {
      title,
      content,
      _embedded,
      acf: { story_introduction },
    } = story;
    const background = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"]["0"].source_url
      : "";
    return {
      title: title.rendered,
      content: content.rendered,
      background,
      intro: story_introduction,
    };
  };

  const featuresResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/49"
  );
  const features = await featuresResponse.json();
  const parseFeatures = () => {
    const {
      title,
      acf: { subtitle, pictures },
    } = features;
    const pictureKeys = Object.keys(pictures).filter((key) => !!pictures[key]);
    const featureImages = pictureKeys.map((key) => {
      const { url, id, alt } = pictures[key];
      return { url, id, title: alt };
    });
    return {
      title: title.rendered,
      subtitle,
      featureImages,
    };
  };

  const charactersResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/22?_embed"
  );
  const charactersJSON = await charactersResponse.json();
  const parseCharacters = () => {
    const {
      title,
      acf: { subtitle, ...characters },
    } = charactersJSON;
    const charactersKeys = Object.keys(characters).filter(
      (key) => characters[key].show_this_characters
    );
    const charactersContent = charactersKeys.map((key) => {
      const { title, description, image } = characters[key];
      return { title, description, characterImageUrl: image, id: key };
    });
    return {
      title: title.rendered,
      subtitle,
      charactersContent,
    };
  };

  const news = await fetchNews({ page: INITIAL_PAGE });

  return {
    props: {
      gallery: parseGallery(),
      story: parseStory(),
      features: parseFeatures(),
      characters: parseCharacters(),
      news,
    },
    revalidate: 60,
  };
};
