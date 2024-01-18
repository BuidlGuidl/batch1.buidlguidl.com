import Image from "next/image";

const KavirajProfilePage = () => {
  const profileImage = "/kaviraj.jpg";
  const bio =
    "Hi my name is Kaviraj (kaviraj.eth) I'm a computer science student who builds web applications and interested in web3 space :)";
  const links = [
    { label: "Portfolio", url: "https://kaviraj-j.me" },
    { label: "GitHub", url: "https://github.com/kaviraj-j" },
    { label: "Twitter", url: "https://twitter.com/kaviraj_jk" },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-center mb-8">
        <Image src={profileImage} alt="Kaviraj Avatar" width={200} height={200} className="rounded-full shadow-md" />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">{bio}</h2>
      </div>

      <div className="flex flex-col space-y-4">
        {links.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            className="text-lg font-medium text-blue-500 hover:underline"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default KavirajProfilePage;
