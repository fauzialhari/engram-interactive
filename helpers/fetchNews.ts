async function fetchNews({ page }: { page: number }): Promise<
  | {
      title: string;
      date: string;
      content: string;
      id: string;
    }[]
  | string
> {
  try {
    const newsResponse = await fetch(
      `https://fc.engraminteractive.com/wp-json/wp/v2/posts?page=${page}&per_page=2`
    );
    if (!newsResponse.ok) {
      if (newsResponse.status === 400) {
        throw new Error("There is no more news to show");
      } else {
        throw new Error("Fail to load news, please try again later");
      }
    }

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
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default fetchNews;
