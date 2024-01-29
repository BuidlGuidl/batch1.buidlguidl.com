import Image from "next/image";
import Link from "next/link";
import { options } from "../components/particleOptionsTSX";
import type { NextPage } from "next";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkInCounter, isLoading: isCounterLoading } = useScaffoldContractRead({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  type pInit = (engine: Engine) => Promise<void>;
  const particlesInit: pInit = async engine => {
    const result = await loadSlim(engine);
    return result;
  };

  return (
    <>
      <MetaHeader />
      <Particles id="tsparticles" init={particlesInit} options={options} />
      <div className="flex items-center flex-col flex-grow pt-10" style={{ zIndex: 1 }}>
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to the</span>
            <span className="block text-4xl font-bold">Buidl Guidl Batch 1</span>
            <div className="flex items-center flex-col">
              <br></br>
              <Image
                width={0}
                height={0}
                sizes="110vh"
                style={{ width: "auto", height: "10%" }}
                src="/batch1.jpg"
                alt="Batch1_Logo"
                className="mb-2 rounded-full"
              />
            </div>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count:</span>
            <span>{isCounterLoading ? "Loading..." : checkInCounter?.toString()}</span>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
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
