import { useCallback, useState } from "react";
import fetchNews from "./fetchNews";
import useDidUpdate from "../utils/useDidUpdate";
const unionBy = require("lodash/unionBy");
export const INITIAL_PAGE = 1;
export default function useFetchNews(
  initialDataArticles: {
    title: string;
    date: string;
    content: string;
    id: string;
  }[]
): [
  {
    title: string;
    date: string;
    content: string;
    id: string;
  }[],
  () => void,
  boolean
] {
  const [newsPage, setNewsPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(initialDataArticles);
  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const articlesFetched = await fetchNews({ page: newsPage });
      // union the articles by id
      setArticles((articles) => unionBy(articles, articlesFetched, "id"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [newsPage]);
  useDidUpdate(fetchArticles);
  const loadMore = () => setNewsPage(newsPage + 1);
  return [articles, loadMore, loading];
}
