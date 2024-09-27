import React from "react";
import ThemeLink from "./ThemeLink";
import MainImg from "@/public/mainimg.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-20 items-center gap-14 text-slate-100 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-12 md:py-16 px-4 md:px-16">
      <div className="flex flex-col space-y-8 items-start">
        <h2 className="md:text-6xl text-4xl font-bold">
          Free Invoice Generator - Invoice Maker
        </h2>
        <p className="md:text-xl text-normal text-gray-300 max-w-xl">
          Create, Manage and Track Recurring Invoices Download as PDF, Email and
          Print Invoices
        </p>
        <ThemeLink
          className={"bg-rose-600 hover:bg-rose-700"}
          title={"Create your first Invoice"}
          href={"/invoices/new"}
        />
      </div>
      <div>
        <Image src={MainImg} alt="main_img" />
      </div>
    </section>
  );
}
