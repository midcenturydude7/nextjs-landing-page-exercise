"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNavItems } from "../../../lib/mobileNavItems";
import cn from "../../../lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [selected, setSelected] = React.useState(pathname);

  return (
    <nav className="hidden lg:flex lg:flex-grow lg:justify-center">
      <div className="flex items-center justify-center rounded-lg border border-slate-300/10 bg-gradient-to-b from-[rgba(17,17,32,0.88)] to-[rgb(0,2,8)] px-6 py-2">
        <ul className="flex items-center space-x-6 divide-x divide-slate-300/10 [&>*+*]:pl-6">
          {mobileNavItems.map(({ id, path, label }) => {
            const isActive = path === pathname;
            return (
              <li key={id} className="">
                <Link href={path}>
                  <button
                    data-active={isActive}
                    onClick={() => setSelected(path)}
                    className={cn(
                      "nav-button rounded-lg border border-transparent px-4 pb-[0.75em] pt-2 text-slate-300/70 transition-all duration-1000 ease-in-out hover:border-[#00b7ff27] hover:text-gray-200/80",
                      selected === path
                        ? "nav-button-active cursor-default border-[#00b7ff27] text-gray-200/80"
                        : "",
                    )}
                  >
                    {label}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
