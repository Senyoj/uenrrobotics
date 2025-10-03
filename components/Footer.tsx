import Image from "next/image";
import React from "react";

const footerData = {
  socials: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.477 17.523 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  columns: [
    {
      title: "Products",
      links: [
        { name: "Curiosity", href: "/products/curiosity" },
        { name: "Explorer", href: "/products/explorer" },
        { name: "AMR", href: "/products/amr" },
        { name: "Robotic Arm", href: "/products/robotic-arm" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Environmental Monitoring", href: "/solutions" },
        { name: "Industrial Automation", href: "/solutions" },
        { name: "Surveillance", href: "/solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Join Us", href: "/join" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ],

};

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <ul className="mt-4 space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto py-12 px-6 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
          <div className="space-y-8 xl:col-span-1">
            <Image
              className=" w-auto"
              src="/logo.png"
              alt="URC Logo"
              width={140}
              height={140}
            />
            <p className="text-sm text-gray-500">
A Smartere World            </p>
            <div className="flex space-x-6">
              {footerData.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {footerData.columns.map((column) => (
                <FooterLinkColumn key={column.title} title={column.title} links={column.links} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} UENR Robotics Club. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
