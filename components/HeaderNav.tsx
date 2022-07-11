const HeaderNav: React.FC<{}> = () => {
  return (
    <header className="mx-auto fixed w-screen inset-x-0 top-0 bg-secondary text-primary font-bold z-10">
      <div className="container mx-auto">
        <nav>
          <ol>
            <li className="inline-block">
              <a
                href="#story"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:border-primary"
              >
                Story
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#features"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:border-primary"
              >
                Feature
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:border-primary"
              >
                Characters
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#gallery"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:border-primary"
              >
                Gallery
              </a>
            </li>
            <li className="inline-block">
              <a
                href="#news"
                className="inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:border-primary"
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
