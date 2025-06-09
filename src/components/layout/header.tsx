"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLAnchorElement>('[data-active="true"]');

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;

      requestAnimationFrame(() => {
        if (indicatorRef.current) {
          indicatorRef.current.style.transition = 'width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease';
          indicatorRef.current.style.width = `${offsetWidth}px`;
          indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
          indicatorRef.current.style.opacity = '1';
        }
      });
    }
  }, [pathname]);

  const handleMouseEnter = (path: string) => {
    setHoveredItem(path);

    if (!navRef.current || !indicatorRef.current) return;

    const hoveredLink = navRef.current.querySelector<HTMLAnchorElement>(`[href="${path}"]`);

    if (hoveredLink) {
      const { offsetLeft, offsetWidth } = hoveredLink;

      requestAnimationFrame(() => {
        if (indicatorRef.current) {
          indicatorRef.current.style.transition = 'width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease';
          indicatorRef.current.style.width = `${offsetWidth}px`;
          indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
          indicatorRef.current.style.opacity = '1';
        }
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);

    if (!navRef.current || !indicatorRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLAnchorElement>('[data-active="true"]');

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;

      requestAnimationFrame(() => {
        if (indicatorRef.current) {
          indicatorRef.current.style.transition = 'width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease';
          indicatorRef.current.style.width = `${offsetWidth}px`;
          indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
        }
      });
    }
  };

  return (
    <>
      {/* Profile Section */}
      <section className="w-full flex gap-4 justify-between mb-6 p-2">
        <div className="flex gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGJ73od6BV4ow/profile-displayphoto-shrink_800_800/B4DZaXFO2fHwAc-/0/1746291464667?e=1752710400&v=beta&t=8OrR72_gLD5px8L9ize5ZEgpAfYkySx5I0QU1klVlzc"
            alt="bedanta"
            width={56}
            height={56}
            className="rounded-full w-14 h-14 object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="mb-0">bedanta</h2>
            <p className="mb-0 text-zinc-400 font-normal leading-none">
              Student • Dev • Ailurophile
            </p>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/1VOPlxQSpbe4EhdgANfZC_ECnezeBI2Ju/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 bg-stone-800/80 hover:bg-stone-800/90 border border-stone-700/50 hover:border-stone-700/70 rounded-lg text-sm font-normal text-zinc-100 transition-all duration-300 hover:shadow-md no-underline"
          >
            <FileText size={16} className="transition-transform duration-300 group-hover:rotate-3" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </section>

      {/* Navigation */}
      <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
        <nav
          ref={navRef}
          className="flex gap-2 relative justify-start w-full z-[100] rounded-lg"
          onMouseLeave={handleMouseLeave}
        >
          {/* Active indicator background */}
          <div
            ref={indicatorRef}
            className="absolute h-[calc(100%-0.5rem)] bg-stone-800 rounded-md top-1 z-0 opacity-0"
            style={{
              transition: 'width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease',
              willChange: 'transform, width, opacity'
            }}
          />

          {/* Navigation items */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-3 border-1 border-gray-100 rounded-md text-sm relative no-underline transition-colors duration-200 ease-in z-10 
                ${pathname === item.path
                  ? "text-zinc-100"
                  : hoveredItem === item.path
                    ? "text-zinc-200"
                    : "text-zinc-400"}`}
              data-active={pathname === item.path}
              onMouseEnter={() => handleMouseEnter(item.path)}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}