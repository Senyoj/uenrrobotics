import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  name: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  breadcrumbs,
  imageUrl,
}) => {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-start text-white">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover -z-20"
        priority
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.name} className="flex items-center">
                <Link href={breadcrumb.href} className="hover:text-blue-300 transition-colors">{breadcrumb.name}</Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;