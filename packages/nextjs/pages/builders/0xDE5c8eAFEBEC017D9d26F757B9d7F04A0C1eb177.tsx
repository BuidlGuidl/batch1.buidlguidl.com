import Image from "next/image";

const NKBKDProfile = () => {
  return (
    <div className="flex p-8">
      <div className="w-1/4 pr-8">
        <Image width={200} height={200} src="/nkbkd.jpg" alt="Avatar" className="w-full h-auto rounded-full" />
      </div>
      <div className="w-3/4">
        <p className="text-lg font-bold mb-4">Hey I&apos;m Baah Kusi | nkbkd.eth</p>
        <p className="mb-4">
          Software Architect and Researcher, interested in Blockchain and AI. Pardon my React, enjoy the Vue.
        </p>
        <p className="mb-4">
          <a className="text-teal-400 hover:underline" href="https://hurisoft.com/" target="_blank" rel="noreferrer">
            Do checkout my Software Company
          </a>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/kbaahkusi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            My X
          </a>
          <a
            href="https://github.com/baahkusi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            My GitHub
          </a>
          <a
            href="https://baahkusi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            My Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default NKBKDProfile;
