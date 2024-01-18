import { useEffect, useState } from "react";
import Link from "next/link";
import { appChains } from "~~/services/web3/wagmiConnectors";

const PapaWheelie = () => {
  const [ensData, setEnsData] = useState<Record<string, string | undefined>>({});
  const nameTitle = "P A P A W H E E L I E";
  const ensName = "papawheelie.eth";

  useEffect(() => {
    const client = appChains.publicClient({
      chainId: 1,
    });
    async function fetchEnsTexts() {
      const keys = ["com.twitter", "bio", "com.discord", "com.youtube", "com.github", "avatar"];
      try {
        const texts = await Promise.all(
          keys.map(key =>
            client
              .getEnsText({
                name: "papawheelie.eth",
                key: key,
              })
              .then(text => ({ key, text })),
          ),
        );

        const newData = texts.reduce((acc, { key, text }) => {
          acc[key] = text ?? undefined;
          return acc;
        }, {} as Record<string, string | undefined>);

        setEnsData(newData);
      } catch (error) {
        console.error("Error fetching ENS texts:", error);
      }
    }

    fetchEnsTexts();
  }, []);

  return (
    <div className="flex h-lvh flex-grow items-center justify-center px-4">
      <div className="mx-auto max-w-3xl rounded-md shadow-2xl shadow-indigo-500/40 md:shadow-indigo-500/40 md:shadow-2xl">
        <div className="flex flex-col md:flex-row items-center items-stretch justify-center gap-4">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <picture>
              <img
                className="rounded-full w-1/2 h-1/2 md:h-full md:w-full md:object-cover md:rounded-l-md md:rounded-r-none"
                src={ensData["avatar"] ?? "https://i.imgur.com/UhV7H97.jpeg"}
                alt={ensData["name"] ?? "Loading..."}
              />
            </picture>
          </div>
          <div className="md:w-2/3 flex flex-col justify-between p-8">
            <div className="text-center md:text-start divide-y divide-solid divide-slate-500/30">
              <p className="my-0">{nameTitle}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">{ensName}</span>
            </div>
            <div className="text-center md:text-left pb-2">
              <p>{ensData["bio"] ?? "Loading..."}</p>
            </div>
            <div className="flex flex-wrap justify-between items-end">
              <Link
                href={ensData["com.twitter"] ?? "#"}
                target="_blank"
                className="bg-blue-400 hover:bg-blue-400/50 text-white p-2 rounded"
              >
                Twitter
              </Link>
              <Link
                href={ensData["com.github"] ?? "Loading..."}
                target="_blank"
                className="bg-[#000] hover:bg-[#000]/50 text-white p-2 rounded"
              >
                Github
              </Link>
              <Link
                href={ensData["com.youtube"] ?? "Loading..."}
                target="_blank"
                className="bg-[#FF0000] hover:bg-[#ff0000]/50 text-white p-2 rounded"
              >
                Youtube
              </Link>
              <Link
                target="_blank"
                href={ensData["com.discord"] ?? "Loading..."}
                className="bg-[#5865F2] hover:bg-[#5865F2]/50 text-white p-2 rounded"
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

export default PapaWheelie;
