import type { NextPage } from "next";

import AnimatedHeader from "../components/AnimatedHeader";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto">
      <h1>Gallery</h1>
      <AnimatedHeader position="left">Woii</AnimatedHeader>
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
