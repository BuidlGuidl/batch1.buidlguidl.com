import Image from "next/image";

const KarandeepSinghBuilderPage = () => {
  return (
    <div className="w-64 m-10 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="relative h-40">
        <Image
          className="object-cover w-full h-full"
          src="/karandeepsingh.jpeg"
          alt="karandeepsingh.eth image"
          layout="fill"
        />
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Karandeep Singh</h1>
        <p className="text-gray-600 text-sm">
          Hello, I&apos;m a web3 fullstack dev focused on building decentralized solutions. Currently working on an
          fully non-custodial smart contract wallet with passkey and session key.
        </p>
        <div className="flex justify-center mt-4">
          <a className="text-blue-600 mr-4" href="https://github.com/KannuSingh" target="_blank" rel="noreferrer">
            Github
          </a>
          <a className="text-blue-600" href="https://t.me/kdsinghsaini" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default KarandeepSinghBuilderPage;
