import { useState } from "react";
const HeaderNav: React.FC<{}> = () => {
  const [isExpandedMobile, setIsExpanded] = useState(false);
  function toggleExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }
  return (
    <header className="fixed mt-[2.5%] lg:mt-0 mx-auto w-screen max-w-[95%] lg:max-w-none inset-x-0 top-0 lg:font-bold z-10 lg:bg-secondary">
      <button
        type="button"
        aria-label="Menu"
        className={`
          lg:hidden
          absolute
          top-0
          left-0
          w-3/12
          p-7
          bg-secondary
          max-w-[100px]
        `}
        onClick={toggleExpanded}
      >
        <span
          className={`
            block
            relative
            w-full
            py-3
            before:content-['']
            before:absolute
            before:block
            before:bg-primary
            before:w-full
            before:h-1
            after:content-['']
            after:absolute
            after:block
            after:bg-primary
            after:w-full
            after:h-1
            ${
              isExpandedMobile
                ? "before:top-1/2 before:-translate-y-1/2 before:rotate-45"
                : "before:top-0"
            }
            ${
              isExpandedMobile
                ? "after:top-1/2 after:-translate-y-1/2 after:-rotate-45"
                : "after:bottom-0"
            }
          `}
        >
          <span
            className={`
              block
              bg-primary
              h-1
              w-full
              ${
                isExpandedMobile ? "invisible" : ""}
            `}
          ></span>
        </span>
      </button>
      <div className={`bg-secondary py-24 lg:py-0 container mx-auto uppercase text-center lg:text-left ${isExpandedMobile ? "": "hidden"} lg:block`}>
        <nav>
          <ol>
            <li className="lg:inline-block border-primary border-t-2 lg:border-none">
              <a
                href="#story"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary"
              >
                Story
              </a>
            </li>
            <li className="lg:inline-block border-primary border-t-2 lg:border-none">
              <a
                href="#features"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary"
              >
                Feature
              </a>
            </li>
            <li className="lg:inline-block border-primary border-t-2 lg:border-none">
              <a
                href="#characters"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary"
              >
                Characters
              </a>
            </li>
            <li className="lg:inline-block border-primary border-t-2 lg:border-none">
              <a
                href="#gallery"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary"
              >
                Gallery
              </a>
            </li>
            <li className="lg:inline-block border-primary border-t-2 border-b-2 lg:border-none">
              <a
                href="#news"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary"
              >
                News
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
