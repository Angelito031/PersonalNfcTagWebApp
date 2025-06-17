import React from "react";

const Links = () => {
  const links = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/angell031",
      colorClass: "bg-blue-500 hover:bg-blue-800",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/angellll_31/",
      colorClass: "bg-orange-500 hover:bg-orange-800",
    },
    {
      title: "TikTok",
      link: "https://www.tiktok.com/@angell0831",
      colorClass: "bg-neutral-500 hover:bg-neutral-800",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/angell031/",
      colorClass: "bg-sky-500 hover:bg-sky-800",
    },
    {
      title: "Github",
      link: "https://github.com/Angelito031",
      colorClass: "bg-black hover:bg-gray-900",
    },
    {
      title: "Email",
      link: "mailto:angelitocasas23@gmail.com",
      colorClass: "bg-gray-500 hover:bg-gray-800",
    },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow space-y-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.link}
          className={`block w-full ${link.colorClass} text-white py-2 px-4 rounded-md transition text-center font-semibold`}
          rel="noopener noreferrer"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Links;
