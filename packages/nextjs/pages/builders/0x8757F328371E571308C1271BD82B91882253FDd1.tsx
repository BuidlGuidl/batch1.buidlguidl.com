import Image from "next/image";
import Link from "next/link";

const AmrrobbynBuilderPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center dark:bg-gray-900">
      <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">
        <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
          amrrobbyn.eth
        </span>

        <div className="w-full flex justify-center sm:justify-start sm:w-auto">
          <Image
            width={300}
            height={300}
            className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
            src="/amrrobbyn.png"
            alt=""
          />

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-display mb-2 text-2xl font-semibold dark:text-gray-200">Ammar Robbani</p>
            <div className="mb-4 md:text-lg text-gray-400">
              <p>GM Buidlers! You can call me Robb or Robbyn (its similar to my last name). I&apos;m from Indonesia.</p>
              <p>
                Currently, I&apos;ve been working as a backend developer and wanna transitioned as web3 developer, but
                more focused on smart contract.
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-end">
              <Link
                href="https://app.buidlguidl.com/builders/0x8757F328371E571308C1271BD82B91882253FDd1"
                target="_blank"
                className="bg-blue-400 hover:bg-blue-400/50 text-white p-2 rounded mr-4"
              >
                BuidlGuidl
              </Link>
              <Link
                href="https://github.com/amrrobb"
                target="_blank"
                className="bg-[#2b2c2e] hover:bg-[#2b2c2e]/50 text-white p-2 rounded mx-4"
              >
                Github
              </Link>
              <Link
                target="_blank"
                href="https://discordapp.com/users/567606466979168257"
                className="bg-[#5865F2] hover:bg-[#5865F2]/50 text-white p-2 rounded mx-4"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmrrobbynBuilderPage;
