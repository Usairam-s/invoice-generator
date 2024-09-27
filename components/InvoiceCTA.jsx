import React from "react";
import ThemeLink from "./ThemeLink";

export default function InvoiceCTA() {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="py-24 z-30 px-16 bg-white shadow-lg rounded-md">
        <ThemeLink
          title={"Create you first Invoice"}
          href={"/invoice/new"}
          className={"bg-rose-600 hover:bg-rose-700  "}
        />
      </div>
    </div>
  );
}
