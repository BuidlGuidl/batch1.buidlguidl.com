import Image from "next/image";

const JollyV = () => {
  return (
    <div className="flex p-8">
      <div className="w-1/4 pr-8">
        <Image width={200} height={200} src="/JollyV.png" alt="Avatar" className="w-full h-auto rounded-full" />
      </div>
      <div className="w-3/4">
        <p className="text-lg font-bold mb-4">Hey I&apos;m JollyV | jollyv.eth</p>
        <p className="mb-4">
          I&apos;m a Msc of Game Design although I&apos;ve never worked in the area, I&apos;ve dabbled into blockchain
          technology while writing my thesis, and came up with a game project to curb social isolation using blockchain
          and gamification
        </p>
        <p className="mb-4">
          I&apos;m from Portugal, I love Surfing, blockchain, trading, gaming, my pets and family/friends
        </p>

        <div className="flex space-x-4">
          <a
            href="https://twitter.com/Jolly_Voyager"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/JollyRogerz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default JollyV;
