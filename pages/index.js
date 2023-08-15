import Image from "next/image";
import Link from "next/link";

const Index = (props) => {
  return (
    <div className="static flex flex-col w-screen h-screen overflow-hidden">
      <script type="text/javascript" src="/scripts/index.js" />
      <div className="absolute w-full h-full bg-blue-400 bg" />
      <div className="absolute inset-0 flex flex-row h-full w-full place-items-center place-content-center">
        <div className="flex flex-col h-full justify-self-center place-items-center place-content-center">
          <div className="flex pb-16 img-div">
            <img className="spinner" src="/loader.svg" width="50" height="50" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 overflow-hidden">
        <div className="social-bar">
          <p className="ad">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tuxedocupcakes.com"
            >
              tuxedocupcakes.com
            </a>
          </p>

          <Link href="https://twitter.com/intent/tweet?url=https://www.motivationalpengu.in/&text=I%20just%20got%20motivated%20by%20a%20penguin!">
            <div className="socials twitter">
              <i className="fab fa-twitter text-brand-1 w-full h-full text-8xl"></i>
            </div>
          </Link>
          <Link href="https://www.facebook.com/sharer/sharer.php?u=https://www.motivationalpengu.in/">
            <div className="socials facebook">
              <i className="fab fa-facebook-square text-brand-2 w-full h-full text-8xl"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-blue-400 bg-yellow-400 bg-green-500 bg-indigo-400 bg-purple-400" />
    </div>
  );
};

export default Index;
