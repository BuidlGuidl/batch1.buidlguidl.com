import Image from "next/image";

const BabacanBuilderProfile = () => {
  return (
    <div className="flex p-8">
      <div className="w-1/8 pr-10">
        <Image width={200} height={200} src="/babacan.png" alt="Avatar" className="w-full h-auto rounded-full" />
      </div>
      <div className="flex flex-col w-2/4">
        <p className="text-lg font-bold mb-5">Hey I&apos;m Oguzhan | babacan.eth</p>
        <p className="mb-4">
          I&apos;m from Turkey that&apos;s why my name seems odd &lsquo;yeah I know I know 😁&rsquo;. It&apos;s hard to
          pronounce it but let me give you a hint: it&apos;s resembling the word &ldquo;awesome&rdquo; 😎 but with
          &apos;n&apos; instead of &apos;m&apos;.
        </p>
        <p>
          Currently I&apos;ve been working as a C++ dev so I dont have much experience in web design or frontend.
          I&apos;m in the learning phase of React and Javascript. Hope I&apos;ll be better in a couple of months
          :&rsquo; I enjoy writing code, scuba-diving, and running.
        </p>
        <div className="flex flex-col bg-base-100 py-2 text-center items-center max-w-xs rounded-3xl">
          <p className="mb-4">You can reach out to me from:</p>
          <a
            href="https://twitter.com/0xBabacan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-yellow-500"
          >
            Twitter
          </a>
          <a
            href="https://github.com/0xBabacan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-yellow-500"
          >
            GitHub
          </a>
          <a
            href="https://t.me/xBabacan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-yellow-500"
          >
            Telegram
          </a>
        </div>
        <p className="mb-5">Stay with Scaffold ETH 🚀</p>
      </div>
    </div>
  );
};

export default BabacanBuilderProfile;
