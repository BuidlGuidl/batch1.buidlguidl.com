import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const BuilderPage: NextPage = () => {
  const {
    data: eventData,
    isLoading,
    error,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 114830037n,
  });

  const firstTimeCheckInEvents = eventData?.filter(({ args: { first } }) => first);
  const builders = firstTimeCheckInEvents?.map(({ args: { builder } }) => builder);

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex-col m-10 col-span-1 lg:col-span-2 flex flex-col gap-6">
        {error && <h3>Had a problem fetching builder data</h3>}
        <div className="z-10">
          <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
            <div className="h-[5rem] w-[10.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
              <div className="flex items-center justify-center space-x-2">
                <p className="my-0 text-sm">Checked In Builders</p>
              </div>
            </div>
            <div className="p-5 divide-y divide-base-300">
              {isLoading
                ? new Array(10).fill(null).map((_, idx) => (
                    <div key={idx} className="flex gap-2 items-center mb-2">
                      <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                      <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-28"></div>
                      </div>
                    </div>
                  ))
                : builders?.map(builderAddress => (
                    <Link
                      key={builderAddress}
                      href={`/builders/${builderAddress}`}
                      className="hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded gap-2 grid grid-flow-col"
                    >
                      <Address disableAddressLink hideCopyIcon address={builderAddress} size="xl" />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
