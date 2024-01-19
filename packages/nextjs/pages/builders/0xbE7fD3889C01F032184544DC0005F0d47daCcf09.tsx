import Image from "next/image";

const GusmegProfile = () => {
  return (
    <div className="flex p-8">
      <div className="w-1/4 pr-8">
        <Image width={200} height={200} src="/gusmeg.jpg" alt="Avatar" className="w-full h-auto rounded-full" />
      </div>
      <div className="w-3/4">
        <p className="text-lg font-bold mb-4">Hey I&apos;m Gustavo | gusmeg.eth</p>
        <p className="mb-4">
          I&apos;m a 26 yo chemical engineer and blockchain enthusiast. Greetings from{" "}
          <a
            className="text-teal-400 hover:underline"
            href="https://www.google.com/maps/place/Montevideo,+Departamento+de+Montevideo/@-34.8340562,-56.362284,11z"
            target="_blank"
            rel="noreferrer"
          >
            Montevideo, Uruguay
          </a>
          !!!
        </p>
        <p className="mb-4">
          I really like doing outdoor activities, learning new things and eating{" "}
          <a
            className="text-teal-400 hover:underline"
            href="https://en.wikipedia.org/wiki/Chivito_(sandwich)"
            target="_blank"
            rel="noreferrer"
          >
            chivitos.
          </a>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/GusMeg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Let&apos;s Buidl together!
          </a>
        </div>
      </div>
    </div>
  );
};

export default GusmegProfile;
