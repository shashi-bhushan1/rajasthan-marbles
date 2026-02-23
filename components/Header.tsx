"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { CATEGORIES, getCategoryPageUrl } from "@/data/categories";

const Header = () => {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isInnerPage = pathname !== "/" && pathname !== null;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Change header background and text color on scroll (homepage only)
  useEffect(() => {
    if (isInnerPage) return;
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInnerPage]);

  const contactNumber = "+91 1234567890";
  const whatsappNumber = "911234567890"; // Without + and spaces
  // Placeholder for store location URL; can be replaced later with exact coordinates/map link
  const locateUsUrl = "#";

  const headerClasses = `fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
    isInnerPage
      ? "bg-white text-gray-900 shadow-md border-b border-gray-200"
      : isScrolled
        ? "bg-white text-gray-900 shadow-md border-b border-gray-200"
        : "bg-black/20 backdrop-blur-md text-white"
  }`;

  const navLinkClasses =
    "text-xs md:text-sm font-semibold tracking-[0.18em] uppercase hover:text-blue-700 transition-colors";

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              Rajasthan Marbles
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            {/* Products with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <span className={navLinkClasses}>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl py-2 z-50">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.slug}
                      href={getCategoryPageUrl(category.slug)}
                      className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block px-4 py-2 hover:bg-blue-50 transition-colors border-t border-gray-200 mt-1"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    View All Products
                  </Link>
                </div>
              )}
            </div>

            {/* Granite */}
            <Link
              href="/granite"
              className={`${navLinkClasses} hover:opacity-80`}
            >
              Granite
            </Link>

            {/* Adhesives */}
            <Link
              href="/adhesives"
              className={`${navLinkClasses} hover:opacity-80`}
            >
              Adhesives
            </Link>
          </div>

          {/* Right Side - Locate Us, Contact Number and WhatsApp */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Contact Number */}
            <a
              href={`tel:${contactNumber.replace(/\s/g, "")}`}
              className="flex items-center space-x-2 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{contactNumber}</span>
            </a>

            {/* Locate Us (link-style with icon) */}
            <a
              href={locateUsUrl}
              className="flex items-center space-x-2 text-sm md:text-base hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
                />
              </svg>
              <span>LOCATE US</span>
            </a>

            {/* WhatsApp (link-style with icon) */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm md:text-base hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:opacity-80 transition-opacity">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
