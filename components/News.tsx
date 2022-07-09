import FuturisticEdge from "./FuturisticEdge";
const News: React.FC<{
  articles: { title: string; date: string; content: string; id: string }[];
}> = ({ articles }) => {
  return (
    <section className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-96">
      <div className="text-center mb-24">
        <h1 className="inline-block mx-auto">News</h1>
      </div>
      {articles.map(({ title, date, content, id }) => (
        <article key={id} className="grid grid-cols-3 gap-24 mb-48">
          <div className="text-right text-primary">
            <h2 className="mb-0 font-normal">{title}</h2>
            <hr className="my-6 border-primary" />
            <h2 className="font-normal">{date}</h2>
          </div>
          <div className="relative bg-tertiary p-14">
            <div className="absolute -z-[1] w-[calc(100%+5.6rem)] h-[calc(100%+5.6rem)] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <FuturisticEdge></FuturisticEdge>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <a
              href="#"
              className="uppercase text-primary italic text-right float-right"
            >
              Read More//
            </a>
          </div>
        </article>
      ))}
      <div className="text-center">
        <button className="text-primary font-normal italic">Load more</button>
      </div>
    </section>
  );
};

export default News;
