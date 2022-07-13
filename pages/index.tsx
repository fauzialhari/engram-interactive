import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";

import HeaderNav from "../components/HeaderNav";
import Landing from "../components/Landing";
import Story from "../components/Story";
import FeaturesSlider from "../components/FeaturesSlider";
import CharactersSlider from "../components/CharactersSlider";
import Gallery from "../components/Gallery";
import News from "../components/News";
import FooterNav from "../components/FooterNav";

const Home: NextPage<{
  posts: [];
}> = ({ posts }) => {
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

  return (
    <main className="container mx-auto">
      <HeaderNav />
      {JSON.stringify(posts)}
      <Landing></Landing>
      <Story
        intro="cyberpunk jrpg set in 2105 germany."
        title="Story"
        background="/assets/BG.png"
      >
        <div className="text-center">
          <p className="mb-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium voluptates laboriosam quos quaerat, tenetur alias odit
            ullam doloribus corrupti quisquam, sed consectetur velit qui totam
            dolores ab id nesciunt sint.
          </p>
          <h1 className="italic">Tatakae</h1>
          <p className="italic">-Michael</p>
        </div>
      </Story>
      <FeaturesSlider
        featureImages={[
          {
            url: "/assets/features-placeholder.png",
            id: "1",
            title: "Placeholder",
          },
          {
            url: "/assets/character2.png",
            id: "2",
            title: "Placeholder 2",
          },
          {
            url: "/assets/BG.png",
            id: "3",
            title: "Placeholder 3",
          },
          {
            url: "/assets/features-placeholder.png",
            id: "4",
            title: "Placeholder",
          },
        ]}
      />
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
      <Gallery
        images={[
          { url: "/assets/gallery-image.png", id: "1", title: "gallery 1" },
          { url: "/assets/gallery-image.png", id: "2", title: "gallery 2" },
          { url: "/assets/gallery-image.png", id: "3", title: "gallery 3" },
          { url: "/assets/gallery-image.png", id: "4", title: "gallery 4" },
          { url: "/assets/gallery-image.png", id: "5", title: "gallery 5" },
          { url: "/assets/gallery-image.png", id: "6", title: "gallery 6" },
          { url: "/assets/gallery-image.png", id: "7", title: "gallery 7" },
          { url: "/assets/gallery-image.png", id: "8", title: "gallery 8" },
          { url: "/assets/gallery-image.png", id: "9", title: "gallery 9" },
        ]}
      />
      <News articles={articles} />
      <FooterNav />
    </main>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://fc.engraminteractive.com/wp-json/wp/v2/posts"
  );
  const posts = await res.json();
  console.log("jalan");

  return {
    props: {
      posts,
    }, // will be passed to the page component as
    revalidate: 60
  };
};
