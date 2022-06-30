import type { NextPage } from "next";

import AnimatedHeader from "../components/AnimatedHeader";
import Story from "../components/Story";
import background from "../assets/bg.png";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto">
      <Story
        intro="cyberpunk jrpg set in 2105 germany."
        title="Story"
        background={background.src}
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
      <AnimatedHeader
        text="Features"
        subtitle="variety of mod chips & psionics to choose"
      />
      <AnimatedHeader
        isLeftPositioned={false}
        text="Characters"
        subtitle="variety of mod chips & psionics to choose"
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
