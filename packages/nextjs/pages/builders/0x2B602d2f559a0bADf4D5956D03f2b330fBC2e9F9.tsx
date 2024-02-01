import Image from "next/image";

const GhufranHassanBuilderPage = () => {
  return (
    <div className="max-w-3xl m-10 bg-gray shadow-md rounded-md overflow-hidden mx-auto">
      <div className="relative h-60 w-full">
        <Image
          className="object-contain w-full h-60"
          src="/ghufran.jpeg"
          alt="ghufran image"
        />
      </div>
      <div className="py-4 px-6">
      <h1 className="text-2xl font-italic text-blue-800 whitespace-nowrap">Syed Ghufran Hassan</h1>
        <p className="text-gray-600 text-md">
          Hello, I am Ghufran and I am self taught developer and working as project manager. I am keen to build and contribute towards open-source projects.
        </p>
        <div className="flex justify-start mt-4 text-left">
          <a className="text-blue-400" href="https://github.com/syed-ghufran-hassan" target="_blank">
            Github
          </a>
          <a className="text-blue-400" href="mailto:syedghufranhassan@gmail.com" target="_blank">
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default GhufranHassanBuilderPage;
