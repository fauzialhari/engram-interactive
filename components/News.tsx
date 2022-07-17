import { useRef, createRef, useState } from "react";
import getElementRef from "../utils/getElementRef";
import elementSetter from "../utils/elementSetter";
import FuturisticEdge from "./FuturisticEdge";
import useOnScrollEffect from "../utils/useOnScrollEffect";
import Modal from "./Modal";
const News: React.FC<{
  articles: { title: string; date: string; content: string; id: string }[];
  onLoadMore: ()=>void,
  loading: boolean
}> = ({ articles, onLoadMore, loading }) => {
  const titleRevealerRef = useRef(null);
  const titleRef = useRef(null);
  const newsBottomLineRefs = useRef([]);
  const newsTitleRefs = useRef([]);
  const newsDateRefs = useRef([]);
  const newsContentRefs = useRef([]);
  const loadMoreButtonRef = useRef(null);
  newsBottomLineRefs.current = articles.map(
    (_article, i) => newsBottomLineRefs.current[i] ?? createRef()
  );
  newsTitleRefs.current = articles.map(
    (_article, i) => newsTitleRefs.current[i] ?? createRef()
  );
  newsDateRefs.current = articles.map(
    (_article, i) => newsDateRefs.current[i] ?? createRef()
  );
  newsContentRefs.current = articles.map(
    (_article, i) => newsContentRefs.current[i] ?? createRef()
  );
  const [activeNewsItem, setActiveNewsItem] = useState(-1);
  function animateEachNews(index: number) {
    const newsBottomLine = new elementSetter(
      getElementRef(newsBottomLineRefs.current[index])
    );
    newsBottomLine.removeClass("scale-x-0");
    const newsTitle = new elementSetter(
      getElementRef(newsTitleRefs.current[index])
    );
    newsTitle.removeClass("opacity-0");
    const newsDate = new elementSetter(
      getElementRef(newsDateRefs.current[index])
    );
    newsDate.removeClass("opacity-0");
    const newsContent = new elementSetter(
      getElementRef(newsContentRefs.current[index])
    );
    newsContent.removeClass("scale-0");
    const newsText = new elementSetter(
      newsContent.element.childNodes[1] as HTMLElement
    );
    newsText.element.addEventListener("transitionend", () => {
      if (index + 1 < articles.length) {
        animateEachNews(index + 1);
      } else {
        const loadMoreButton = new elementSetter(
          getElementRef(loadMoreButtonRef)
        );
        loadMoreButton.removeClass("opacity-0");
      }
    });
    newsText.removeClass("opacity-0");
  }
  function animate() {
    const titleElement = getElementRef(titleRef);
    const titleElementRight = titleElement.getBoundingClientRect().right;
    const title = new elementSetter(titleElement);
    const TitleRevealer = new elementSetter(getElementRef(titleRevealerRef));
    TitleRevealer.addStyle({
      width: `${titleElementRight}px`,
    }).removeClass("scale-x-0");
    TitleRevealer.element.addEventListener("transitionend", () => {
      TitleRevealer.addClass([
        "right-[calc(100%-7px)]",
        "transition-right",
        "duration-[250ms]",
      ]).removeClass("right-0");
      title.addClass("text-primary").removeClass("text-transparent");
    });
    animateEachNews(0);
  }
  function onClickNewsItem(index: number) {
    setActiveNewsItem(index);
  }
  useOnScrollEffect(titleRef, animate);
  return (
    <section
      id="news"
      className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-96"
      onClick={animate}
    >
      <div className="text-center mb-28">
        <h1
          ref={titleRef}
          className="inline-block mx-auto leading-[0.7] relative text-transparent"
        >
          <span></span>
          News
          <span
            ref={titleRevealerRef}
            className="h-[57px] mt-[2px] bg-primary absolute right-0 top-1/2 -translate-y-1/2 scale-x-0 origin-left transition-transform duration-[333ms]"
          ></span>
        </h1>
      </div>
      {articles.map(({ title, date, content, id }, index) => (
        <article key={id} className="grid grid-cols-3 gap-24 mb-48">
          <div className="text-right text-primary">
            <h2
              ref={newsTitleRefs.current[index]}
              className="opacity-0 transition-opacity duration-[250ms] delay-200 mb-0 font-normal"
            >
              {title}
            </h2>
            <hr
              ref={newsBottomLineRefs.current[index]}
              className="my-6 border-primary scale-x-0 origin-left transition-transform duration-[417ms]"
            />
            <h2
              ref={newsDateRefs.current[index]}
              className="opacity-0 transition-opacity duration-[250ms] delay-200 font-normal"
            >
              {date}
            </h2>
          </div>
          <div
            ref={newsContentRefs.current[index]}
            className="relative bg-tertiary p-14 transition-transform scale-0 duration-[167ms]"
          >
            <div className="absolute -z-[1] w-[calc(100%+5.6rem)] h-[calc(100%+5.6rem)] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <FuturisticEdge></FuturisticEdge>
            </div>
            <div className="opacity-0 transition-opacity delay-[250ms]">
              <div
                className="line-clamp-[16] mb-9"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
              <a
                href="#"
                className="uppercase text-primary italic text-right float-right"
                onClick={(event) => {
                  event.preventDefault();
                  onClickNewsItem(index);
                }}
              >
                Read More//
              </a>
            </div>
          </div>
        </article>
      ))}
      <div className="text-center">
        <button
          ref={loadMoreButtonRef}
          className="text-primary font-normal italic opacity-0 transition-opacity duration-[167ms]"
          onClick={onLoadMore}
          disabled={loading}
        >
          Load more
        </button>
      </div>
      {activeNewsItem >= 0 ? (
        <Modal
          {...articles[activeNewsItem]}
          exit={() => setActiveNewsItem(-1)}
        />
      ) : null}
    </section>
  );
};

export default News;
