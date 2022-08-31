import Image from "next/image";
const Footer: React.FC<{
  socialMedias: {
    icon: string;
    text: string;
    url: string;
    id: string;
  }[];
}> = ({ socialMedias }) => {
  return (
    <footer className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-secondarybg pt-14 pb-32">
      <div className="container mx-auto text-primary">
        <h1 className="text-center mb-16">Contact Us</h1>
        <div className="xl:flex">
          <div className="grow mb-6 xl:mb-0">
            <ol className="grid grid-cols-3 gap-3">
              {socialMedias.map(({ icon, text, url, id }) => (
                <li key={id} className="text-center lg:text-start">
                  <div className="w-14 h-14 inline-block align-middle text-center mx-auto lg:mr-9">
                    <Image src={icon} alt="" width={56} height={56} />
                  </div>
                  <br className="lg:hidden" />
                  <a href={url} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <form
            action="https://fc.engraminteractive.com/?na=s"
            method="post"
            target="_blank"
            className="uppercase self-center xl:w-4/12 xl:text-right"
          >
            <label htmlFor="ne" className="mb-5 block">
              Newsletter
            </label>
            <div className="flex">
              <input type="hidden" name="nr" value="minimal" />
              <input type="hidden" name="nlang" value="" />
              <input
                type="email"
                required
                name="ne"
                placeholder="input your email"
                className="grow"
              />
              <button
                type="submit"
                className="border border-primary bg-transparent hover:bg-primary hover:text-white"
              >
                join
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
