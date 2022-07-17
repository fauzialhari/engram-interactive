async function fetchNews(page: number) {
  const newsResponse = await fetch(
    `https://fc.engraminteractive.com/wp-json/wp/v2/posts?page=${page}&per_page=2`
  );
  const newsJSON = await newsResponse.json();
  return newsJSON.map(
    ({
      title,
      date,
      content,
      id,
    }: {
      title: { rendered: string };
      date: string;
      content: { rendered: string };
      id: number;
    }) => ({
      title: typeof title === "string" ? "" : title.rendered,
      date,
      content: typeof content === "string" ? "" : content.rendered,
      id,
    })
  );
}

export default fetchNews;
