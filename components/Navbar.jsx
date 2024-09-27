"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeLink from "./ThemeLink";
import { BiMenu } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-violet-700 text-xl font-medium text-slate-100 flex items-center justify-between px-4 md:px-16 fixed top-0 right-0 w-full left-0 h-20">
        <Link className="font-bold text-2xl md:text-3xl" href={"/"}>
          Invoicer
        </Link>

        <nav className="md:flex hidden items-center gap-6">
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Free Tools</Link>
        </nav>

        <div className="md:flex hidden gap-4 items-center">
          <Link href={"/login"}>Login</Link>
          <ThemeLink
            title={"Register"}
            href={"/register"}
            className={"bg-rose-600 hover:bg-rose-700"}
          />
        </div>

        <button
          className="md:hidden size-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu className="size-6" />
        </button>
      </header>

      {/* add tarnsition to mobile nav */}

      <div
        className={`fixed ease-in-out duration-300 w-80 bg-opacity-80 text-white p-4 z-50 h-screen top-0 bg-slate-800 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-80"
        }`}
      >
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-2xl font-bold">Invoicer</h2>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <AiOutlineClose className="size-6" />
          </button>
        </div>
        <nav className="flex  flex-col md:hidden mt-20 text-2xl font-medium items-center gap-6">
          <Link
            className="hover:text-violet-400 hover:scale-105 transition-all duration-300"
            href={"#"}
          >
            Features
          </Link>
          <Link
            className="hover:text-violet-400 hover:scale-105 transition-all duration-300"
            href={"#"}
          >
            Pricing
          </Link>
          <Link
            className="hover:text-violet-400 hover:scale-105 transition-all duration-300"
            href={"#"}
          >
            Free Tools
          </Link>
        </nav>
        <hr className="my-6" />
        <div className="flex flex-col  justify-center md:hidden gap-4 mt-4 items-center">
          <Link className="text-2xl font-semibold" href={"/login"}>
            Login
          </Link>
          <ThemeLink
            title={"Register"}
            href={"/register"}
            className={"bg-rose-600 hover:bg-rose-700"}
          />
        </div>
      </div>
    </>
  );
}
