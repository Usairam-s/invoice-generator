import React from "react";
import ThemeLink from "./ThemeLink";
import { Accordin } from "./Accordin";

export default function FAQ() {
  return (
    <div className="bg-white md:py-16 flex flex-col items-center  py-8 md:px-16 px-4 text-black">
      <h2 className="text-4xl md:text-5xl md:text-center font-semibold mb-10">
        Frequently Asked Questions FAQ'S
      </h2>

      <Accordin />

      <ThemeLink
        className={"bg-purple-600 hover:bg-purple-700 w-fit mt-12"}
        title={"Create your invoice free"}
        href={"#"}
      />
    </div>
  );
}
