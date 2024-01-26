import Image from "next/image";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";

const RhProfilePage: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="p-16">
          <Image src="/RH.png" alt="RH" width={400} height={400} className="rounded-3xl hover:animate-bounce" />
        </div>
        <div className=" p-4 pr-16 font-xl text-row">
          <p className="text-center font-extrabold text-yellow-400">🌟 About RH 🌟</p>
          <p>Hey heyyy, BG Fams 👋 !!</p>
          <p>
            Been part of the onchain/web3 development journey for over a year now. Grew to love development so much that
            I just want to keep learning and BUIDLing! This is why I am super excited to join all of you in this
            BuidlGuidl journey! 🔥🏗️
          </p>
          <p className="italic font-light text-xs text-slate-400">
            Fun fact about me: You can tell how big of a goofball I am by hovering over my photo.
          </p>
        </div>
      </div>
      <div className=" w-screen px-60">
        <div className="grid grid-cols-3 justify-center items-center gap-12 sm:flex-row">
          <a
            href="https://github.com/PrintRH"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="transition ease-in-out hover:bg-indigo-500 duration-300 flex bg-gray-950 px-5 py-5 text-center items-center rounded-3xl cursor-pointer hover:bg-base-300"
          >
            <CodeBracketSquareIcon className=" h-5 w-5 fill-secondary" />
            <span className="ml-2 text-white"> GitHub </span>
          </a>
          <a
            href="https://twitter.com/RH3th"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="transition ease-in-out hover:bg-indigo-500 duration-300 flex bg-sky-500/50 px-5 py-5 text-center items-center rounded-3xl cursor-pointer hover:bg-base-300"
          >
            <XMarkIcon className="h-5 w-5 item-center" />
            <span className="ml-2 text-white">X Profile</span>
          </a>
          <a
            href="https://rhdev.substack.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className=" transition ease-in-out hover:bg-indigo-500 duration-300 flex bg-amber-800 px-5 py-5 text-center items-center rounded-3xl cursor-pointer hover:bg-base-300"
          >
            <BookOpenIcon className="h-5 w-5 item-center" />
            <span className="ml-2 text-white">Substack</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default RhProfilePage;
