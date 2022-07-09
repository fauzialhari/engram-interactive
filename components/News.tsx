const News: React.FC<{
  articles: { title: string; date: string; content: string; id: string }[];
}> = ({ articles }) => {
  return (
    <section className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-96">
      <h1>News</h1>
      {articles.map(({ title, date, content, id }) => (
        <article key={id}>
          <h2>{title}</h2>
          <h2>{date}</h2>
          <div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <a href="" className="uppercase">
              Read More//
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default News;
