import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";
import parse from "html-react-parser";

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
}> = ({ gallery, story, features }) => {
  const [articles] = useState([
    {
      id: "1",
      title: "Sebvah Judul",
      date: "Semacam tgl",
      content: `<p>Breaking News</p>
      <p>Update fix 4.0 .12 A</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo non tempora beatae dolores eum, voluptatum ut rerum consectetur quidem mollitia, reiciendis iure adipisci natus assumenda quia expedita! Pariatur, dignissimos?</p>
      `,
    },
    {
      id: "2",
      title: "Sebvah Judul",
      date: "Semacam tgl",
      content: `<p>Ini paragraph</p>`,
    },
  ]);
  console.log(parse(story.content));

  return (
    <main className="container mx-auto">
      <HeaderNav />
      <Landing></Landing>
      <Story {...story}>
        <div className="text-center">{parse(story.content)}</div>
      </Story>
      <FeaturesSlider {...features} />
      <CharactersSlider
        charactersContent={[
          {
            characterImageUrl: "/assets/character2.png",
            id: "1",
            title: "Placeholder 1",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`,
          },
          {
            characterImageUrl: "/assets/character.png",
            id: "2",
            title: "Placeholder 2",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`,
          },
          {
            characterImageUrl: "/assets/character.png",
            id: "3",
            title: "Placeholder 3",
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`,
          },
        ]}
      />
      <Gallery {...gallery} />
      <News articles={articles} />
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

  return {
    props: {
      gallery: parseGallery(),
      story: parseStory(),
      features: parseFeatures(),
    }, // will be passed to the page component as
    revalidate: 60,
  };
};
