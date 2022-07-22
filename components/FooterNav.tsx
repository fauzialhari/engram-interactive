import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
  faDiscord,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
const Footer: React.FC<{}> = () => {
  return (
    <footer className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-secondarybg pt-14 pb-32">
      <div className="container mx-auto text-primary">
        <h1 className="text-center mb-16">Contact Us</h1>
        <div className="xl:flex">
          <div className="grow mb-6 xl:mb-0">
            <ol className="grid grid-cols-3 gap-3">
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="">Twitter</a>
              </li>
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="" className="inline-block">
                  Facebook
                </a>
              </li>
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="">Youtube</a>
              </li>
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="">Instagram</a>
              </li>
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="">Discord</a>
              </li>
              <li className="text-center">
                <div className="w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9">
                  <FontAwesomeIcon
                    icon={faSteam}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <br className="lg:hidden"/>
                <a href="">Steam</a>
              </li>
            </ol>
          </div>
          <div className="uppercase self-center xl:w-4/12 xl:text-right">
            <label htmlFor="" className="mb-5 block">
              Newsletter
            </label>
            <input type="email" placeholder="input your email" className="w-full"/>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
