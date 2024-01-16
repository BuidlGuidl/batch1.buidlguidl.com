import Image from "next/image";

export default function yassirakhBuilderPage() {
  return (
    <div className="flex flex-col items-center w-100 mt-4 text-center">
      <Image className="rounded-3xl flex" src="/yassirakh.jpg" alt="yassirakh.eth image" width={200} height={200} />
      <div className="flex flex-col mt-5">
        <span>
          Hello, my name is Yassir (yassirakh.eth), I&apos;m a web2 dev, I&apos;ve deving mainly in PHP using Symfony
          and Drupal, and currently I&apos;m trying to build cool stuff on the web3.
        </span>
        <div className="flex flex-col">
          <span>
            Github :{" "}
            <a className="text-blue-600" href="https://github.com/Yassirakh" target="_blank" rel="noreferrer">
              link
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
