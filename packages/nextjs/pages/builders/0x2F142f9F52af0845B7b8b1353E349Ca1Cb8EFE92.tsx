import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

export function PapaWheelie() {
  const [ensData, setEnsData] = useState<Record<string, string | undefined>>({});
  const nameTitle = "P A P A W H E E L I E";
  const ensName = "papawheelie.eth";

  useEffect(() => {
    const client = createPublicClient({
      chain: mainnet,
      transport: http(),
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
    <div className="mx-auto max-w-3xl p-0 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center md:items-stretch space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            className="rounded-l-md md:rounded-r-none"
            src={ensData["avatar"] ?? "Loading..."}
            alt={ensData["name"] ?? "Loading..."}
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-between p-4">
          <div>
            <p className="text-lg antialiased my-0 align-text-top leading-normal">{nameTitle}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{ensName}</span>
            <p className="text-sm my-2 text-center md:text-left">{ensData["bio"] ?? "Loading..."}</p>
          </div>
          <div className="flex flex-wrap justify-between items-end">
            <Link
              href={ensData["com.twitter"] ?? "#"}
              className="bg-blue-400 hover:bg-blue-400/50 text-white p-2 rounded"
            >
              Twitter
            </Link>
            <Link
              href={ensData["com.github"] ?? "Loading..."}
              className="bg-[#000] hover:bg-[#000]/50 text-white p-2 rounded"
            >
              Github
            </Link>
            <Link
              href={ensData["com.youtube"] ?? "Loading..."}
              className="bg-[#FF0000] hover:bg-[#ff0000]/50 text-white p-2 rounded"
            >
              Youtube
            </Link>
            <Link
              href={ensData["com.discord"] ?? "Loading..."}
              className="bg-[#5865F2] hover:bg-[#5865F2]/50 text-white p-2 rounded"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
