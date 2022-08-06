import type { NextPage, GetStaticProps } from "next";
import parse from "html-react-parser";

import useFetchNews, { INITIAL_PAGE } from "../helpers/useFetchNews";
import fetchNews from "../helpers/fetchNews";

import HeaderNav from "../components/HeaderNav";
import Landing from "../components/Landing";
import Intro from "../components/Intro";
import Story from "../components/Story";
import FeaturesSlider from "../components/FeaturesSlider";
import CharactersSlider from "../components/CharactersSlider";
import Gallery from "../components/Gallery";
import News from "../components/News";
import FooterNav from "../components/FooterNav";
import ScrollSnapController from "../components/ScrollSnapController";
const Home: NextPage<{
  landing: {
    playButtonLink: string;
    introduction: string;
  };
  gallery: {
    title: string;
    images: {
      url: string;
      title: string;
      id: string;
    }[];
  };
  story: {
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
  footer: {
    twitterLink: string;
    facebookLink: string;
    youtubeLink: string;
    instagramLink: string;
    discordLink: string;
    steamLink: string;
  };
}> = ({ landing, gallery, story, features, characters, news, footer }) => {
  const [articles, onLoadMore, loading, error] = useFetchNews(news);
  return (
    <main className="container 2xl:container-relative-size mx-auto">
      <HeaderNav />
      <Landing playButtonLink={landing.playButtonLink} />
      <Intro text={landing.introduction} />
      <Story {...story}>
        <div className="text-center">{parse(story.content)}</div>
      </Story>
      <ScrollSnapController>
        <FeaturesSlider {...features} />
        <CharactersSlider {...characters} />
        <Gallery {...gallery} />
        <News {...{ articles, onLoadMore, loading, error }} />
      </ScrollSnapController>
      <FooterNav {...footer} />
    </main>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const landingResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/243"
  );
  const landing = await landingResponse.json();
  const parseLanding = () => {
    const {
      acf: { play_now_button_link, story_introduction },
    } = landing;
    return {
      playButtonLink: play_now_button_link,
      introduction: story_introduction,
    };
  };

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
    const { title, content, _embedded } = story;
    const background = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"]["0"].source_url
      : "";
    return {
      title: title.rendered,
      content: content.rendered,
      background,
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

  const footerResponse = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/pages/253?_embed"
  );
  const footerJSON = await footerResponse.json();
  const parseFooter = () => {
    const {
      acf: { twitter, facebook, youtube, instagram, discord, steam },
    } = footerJSON;
    return {
      twitterLink: twitter,
      facebookLink: facebook,
      youtubeLink: youtube,
      instagramLink: instagram,
      discordLink: discord,
      steamLink: steam,
    };
  };

  const news = await fetchNews({ page: INITIAL_PAGE });

  return {
    props: {
      landing: parseLanding(),
      gallery: parseGallery(),
      story: parseStory(),
      features: parseFeatures(),
      characters: parseCharacters(),
      news,
      footer: parseFooter(),
    },
    revalidate: 60,
  };
};
