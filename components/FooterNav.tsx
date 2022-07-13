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
    <footer className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-secondarybg pt-20 pb-44">
      <div className="container mx-auto text-primary">
        <h1 className="text-center mb-24">Contact Us</h1>
        <div className="xl:flex">
          <div className="grow mb-8 xl:mb-0">
            <ol className="grid grid-cols-3 gap-3">
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="">Twitter</a>
              </li>
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="" className="inline-block">
                  Facebook
                </a>
              </li>
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="">Youtube</a>
              </li>
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="">Instagram</a>
              </li>
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="">Discord</a>
              </li>
              <li>
                <div className="w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12">
                  <FontAwesomeIcon
                    icon={faSteam}
                    className="fa-2xl relative top-1/2 -translate-y-1/2"
                  />
                </div>
                <a href="">Steam</a>
              </li>
            </ol>
          </div>
          <div className="uppercase self-center xl:w-4/12 xl:text-right">
            <label htmlFor="" className="mb-7 block">
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
