"use client";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    pathname !== "/login" &&
    pathname !== "/signup" && (
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={74}
            height={29}
            className="w-auto h-auto"
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                passHref
                className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                  pathname === link.href ? "bold-16" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Link href="/login">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </Link>
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    )
  );
};

export default Navbar;
