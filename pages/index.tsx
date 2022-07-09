import type { NextPage } from "next";

import Landing from "../components/Landing";
import Story from "../components/Story";
import FeaturesSlider from "../components/FeaturesSlider";
import CharactersSlider from "../components/CharactersSlider";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto">
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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
        culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
        dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
        rerum?
      </p>
      <button>play now</button>
    </main>
  );
};

export default Home;
