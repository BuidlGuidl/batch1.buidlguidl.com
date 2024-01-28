import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkInCounter, isLoading: isCounterLoading } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="px-5">
          <h1 className="text-center mb-8 text-white">
            <span className="block text-2xl mb-2">Welcome to</span>
            <div className="text-center mb-8 text-4xl font-bold">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString("Build Guidl Batch 1 🏗️")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Click Below to Start 💫")
                    .callFunction(() => {
                      console.log("All strings are typed.");
                    })
                    .start();
                }}
              />
            </div>
            <Link href="/builders">
              <div className="flex items-center flex-col">
                <br></br>
                <Image width={500} height={300} src="/batch1.jpg" alt="Batch1_Logo" className="mb-2 rounded-full" />
              </div>
            </Link>
          </h1>
          <p className="text-center text-lg text-white">
            Get started by taking a look at your batch GitHub repository.
          </p>
          <p className="text-lg flex gap-2 justify-center items-center">
            <span className="font-bold text-white">Checked in builders count:</span>
            <span>{isCounterLoading ? "Loading..." : checkInCounter?.toString()}</span>
          </p>
        </div>

        <div className="flex-grow w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-white bg-opacity-75 px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg">
              <BugAntIcon className="h-8 w-8 fill-secondary text-blue-500" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link text-blue-500">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-white bg-opacity-75 px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary text-purple-500" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link text-purple-500">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
