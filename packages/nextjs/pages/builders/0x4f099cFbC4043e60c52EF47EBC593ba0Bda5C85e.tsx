import Image from "next/image";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const Dtnwen = () => {
  return (
    <div className="sm:flex px-8 sm:px-16 py-4">
      <div>
        <div className="avatar">
          <div className="w-64 mask mask-hexagon">
            <Image width={500} height={500} src="/dtnwen.jpg" alt="Avatar" />
          </div>
        </div>

        <div className="flex justify-around py-2">
          <Link target="_blank" href="https://t.me/dtnwen">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <title>Telegram</title>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
            </svg>
          </Link>

          <Link target="_blank" href="https://github.com/dtnwen">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>

          <Link target="_blank" href="https://twitter.com/dtnwen">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="ml-8">
        <div className="sm:flex">
          <p className="text-6xl">DTNWEN</p>
          <div className="self-end py-5">
            <Address address="0x4f099cFbC4043e60c52EF47EBC593ba0Bda5C85e" format="long" />
          </div>
        </div>

        <div>
          <div className="badge badge-outline mx-1">Javascript</div>
          <div className="badge badge-primary mx-1">NextJS</div>
          <div className="badge badge-secondary mx-1">Solidity</div>
          <div className="badge badge-neutral mx-1">Scaffold-ETH-2</div>
        </div>

        <div className="flex">
          <p className="text-base text-justify">
            Hi, I&apos;m DT. I have been self learning web3 development for a year. All I want is coding all the day and
            learn more new skills. I believe blockchain technology would change the world and that&apos;s why I&apos;m
            all in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dtnwen;
