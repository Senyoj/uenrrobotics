"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { navlinks, ProductMegaMenu } from "@/data/data";
const isProductMegaMenu = (menu: any): menu is ProductMegaMenu => 'featuredProduct' in menu;
const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Curiosity");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-white/30 backdrop-blur-lg text-white"
      }`}
    >
      <div className="flex justify-between items-center py-3 px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-center gap-8 lg:gap-20">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Logo" priority={true} width={50} height={50} />
          </Link>
          <div className="hidden md:block">
            <nav>
              <ul className="flex gap-6 lg:gap-10">
                {navlinks.map((item) => (
                  <li
                    key={item.name}
                    className="relative py-4 -my-4"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="font-sans relative hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                      <Link href={item.href}>{item.name}</Link>
                    </div>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-10">
                    {hoveredItem === item.name && (
                      <>
                        {/* Simple Dropdown */}
                        {item.sublinks && item.sublinks.length > 0 && (
                          <div className="p-4 w-72 bg-white shadow-2xl rounded-lg border border-gray-100 flex flex-col gap-2">
                            {item.sublinks.map((sublink) => (
                              <Link key={sublink.title} href={sublink.href} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-black transition-colors">
                                <p className="font-semibold">{sublink.title}</p>
                                <p className="text-sm">{sublink.description}</p>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Products Mega Menu */}
                        {item.megaMenu && isProductMegaMenu(item.megaMenu) && (
                          <div className="w-[600px] bg-white shadow-2xl rounded-lg border border-gray-100 p-8 grid grid-cols-2 gap-8">
                            {/* Left: Featured Product */}
                            <div>
                              <h3 className="font-semibold text-lg">{item.megaMenu.featuredProduct.name}</h3>
                              <p className="text-sm text-gray-500 mb-4">{item.megaMenu.featuredProduct.description}</p>
                              {/* Bento Grid */}
                              <div className="grid grid-cols-3 grid-rows-2 gap-2 h-40">
                                <div className="col-span-2 row-span-2 rounded-md overflow-hidden"><Image src={item.megaMenu.featuredProduct.images[0]} alt="Featured" width={200} height={160} className="w-full h-full object-cover" /></div>
                                <div className="col-span-1 row-span-1 rounded-md overflow-hidden"><Image src={item.megaMenu.featuredProduct.images[1]} alt="Featured sub" width={100} height={76} className="w-full h-full object-cover" /></div>
                                <div className="col-span-1 row-span-1 rounded-md overflow-hidden"><Image src={item.megaMenu.featuredProduct.images[2]} alt="Featured sub 2" width={100} height={76} className="w-full h-full object-cover" /></div>
                              </div>
                            </div>
                            {/* Right: Other Products */}
                            <div className="flex flex-col">
                              <ul className="space-y-4 flex-grow">
                                {item.megaMenu.otherProducts.map(p => (
                                  <li key={p.name}><Link href={p.href} className="font-medium hover:text-blue-500">{p.name}</Link><p className="text-sm text-gray-500">{p.description}</p></li>
                                ))}
                              </ul>
                              <Link href={item.megaMenu.footerLink.href} className="text-blue-500 font-medium hover:text-blue-600 transition-colors flex items-center">
                                {item.megaMenu.footerLink.name}<span className="ml-1">→</span>
                              </Link>
                            </div>
                          </div>
                        )}

                        {/* Solutions Mega Menu */}
                        {item.megaMenu && !isProductMegaMenu(item.megaMenu) && (
                          <div className="flex w-[700px] bg-white shadow-2xl rounded-lg border border-gray-100">
                            {/* Left Pane */}
                            <div className="w-2/5 p-8 border-r border-gray-200 flex flex-col">
                              <ul className="space-y-4 flex-grow">
                                {item.megaMenu.categories.map((cat) => (
                                  <li key={cat.name}>
                                    <Link href={cat.href} onMouseEnter={() => setActiveCategory(cat.name)} className={`flex justify-between items-center text-lg font-medium transition-colors ${activeCategory === cat.name ? "text-black" : "text-gray-500 hover:text-black"}`}>
                                      {cat.name}
                                      <span className="text-gray-400">{cat.isExternal ? '→' : '›'}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <Link href={item.megaMenu.footerLink.href}>
                                <button className="mt-8 px-4 py-2 border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 hover:border-blue-600 transition-colors">
                                  {item.megaMenu.footerLink.name}
                                </button>
                              </Link>
                            </div>

                            <div className="w-3/5 p-8">
                              {item.megaMenu.categories.find(c => c.name === activeCategory && c.content)?.content && (
                                <>
                                  <h2 className="text-3xl font-semibold text-black">{activeCategory}</h2>
                                  <p className="text-gray-600 mb-6">{item.megaMenu.categories.find(c => c.name === activeCategory)?.description}</p>
                                  <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                                    {item.megaMenu.categories.find(c => c.name === activeCategory)!.content!.map((section) => (
                                      <div key={section.title} className="flex flex-col">
                                        <Link href={section.href} className="font-medium text-black hover:text-blue-500 transition-colors">{section.title}</Link>
                                        <p className="text-sm text-gray-500 mb-2">{section.description}</p>
                                        <Link href={section.href} className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors flex items-center">
                                          Read More<span className="ml-1">→</span>
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}</div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <div className="font-sans relative hover:text-blue-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <Link href="/support">Support</Link>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 p-3 px-4 rounded-full font-medium text-white transition-colors">
            Contact Us
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides down */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden absolute bg-white w-full ${isMobileMenuOpen ? "max-h-[90vh]" : "max-h-0"}`}>
        <nav className="p-6 pt-0">
          <ul className="space-y-4">
            {navlinks.map((item) => (
              <li key={item.name}>
                <div className="flex justify-between items-center" onClick={() => !item.megaMenu && !item.sublinks ? setIsMobileMenuOpen(false) : undefined}>
                  <Link href={item.href} className="text-lg font-medium" onClick={() => !item.megaMenu && !item.sublinks ? setMobileMenuOpen(false) : undefined}>
                    {item.name}
                  </Link>
                  {(item.megaMenu || (item.sublinks && item.sublinks.length > 0)) && (
                    <button onClick={() => setOpenMobileSubMenu(openMobileSubMenu === item.name ? null : item.name)} aria-expanded={openMobileSubMenu === item.name}>
                      <svg className={`w-5 h-5 transition-transform ${openMobileSubMenu === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  )}
                </div>
                {/* Mobile Submenu Accordion  */}
                {openMobileSubMenu === item.name && (
                  <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-200">
                    {item.sublinks?.map(sub => (
                      <Link key={sub.title} href={sub.href} className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                        <p className="font-semibold">{sub.title}</p>
                      </Link>
                    ))}
                    {item.megaMenu && isProductMegaMenu(item.megaMenu) && (
                      <>
                        <Link href={item.megaMenu.featuredProduct.href} className="block font-semibold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                          Featured: {item.megaMenu.featuredProduct.name}
                        </Link>
                        {item.megaMenu.otherProducts.map(p => (
                          <Link key={p.name} href={p.href} className="block text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                            {p.name}
                          </Link>
                        ))}
                      </>
                    )}
                    {item.megaMenu && !isProductMegaMenu(item.megaMenu) && (
                      item.megaMenu.categories.map(cat => (
                        <Link key={cat.name} href={cat.href} className="block font-semibold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                          {cat.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </li>
            ))}
            <li className="border-t border-gray-200 pt-4">
              <Link href="/support" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
            </li>
          </ul>
          <button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 p-3 rounded-full font-medium text-white transition-colors">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;