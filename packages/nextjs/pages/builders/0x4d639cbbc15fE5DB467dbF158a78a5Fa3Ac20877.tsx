import Image from "next/image";

const WebsurferBuilderProfile = () => {
  return (
    <div className="flex p-8">
      <div className="w-1/4 pr-8">
        <Image width={200} height={200} src="/websurfer.png" alt="Avatar" className="w-full h-auto rounded-full" />
      </div>
      <div className="w-3/4">
        <p className="text-lg font-bold mb-4">Hey I&apos;m Sam | websurfer.eth</p>
        <p className="mb-4">I enjoy writing code, being active outdoors, and eating lox on bagels :)</p>
        <p className="mb-4">
          <a
            className="text-blue-500 hover:underline"
            href="https://randomstreetview.com/"
            target="_blank"
            rel="noreferrer"
          >
            Here&apos;s a fun corner of the internet
          </a>{" "}
          I recently discovered.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/surfsupper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/swellander"
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

export default WebsurferBuilderProfile;
