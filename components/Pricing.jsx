import Link from "next/link";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

export default function Pricing() {
  return (
    <div className="bg-slate-100 gap-6 py-8 md:px-16 px-4 md:py-16">
      <div className=" flex flex-col gap-10 ">
        <div className="flex flex-col items-center ">
          <h2 className="text-4xl md:text-5xl md:text-center font-semibold mb-10">
            Pricing of Invoice Geneartor
          </h2>
          <p className="text-gray-500 ">
            Only pay when you need premium features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="bg-white flex flex-col gap-8 justify-start rounded-lg shadow-2xl p-10">
            <div className="bg-purple-400/20 p-2  h-14 w-14 flex items-center justify-center rounded-full">
              <BsCheck className="text-purple-500" size={100} />
            </div>
            <h2 className="text-3xl font-semibold">Free Plan</h2>
            <p className="text-gray-500 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              dolorem, facere asperiores dignissimos quo, illum expedita quis
              explicabo quod nesciunt placeat
            </p>
            <Link className="font-semibold text-xl text-purple-500" href={"#"}>
              Create Free Invoice
            </Link>
          </div>
          <div className="bg-white flex flex-col gap-8 justify-start rounded-lg shadow-2xl p-10">
            <div className="bg-purple-400/20 p-2  h-14 w-14 flex items-center justify-center rounded-full">
              <IoDiamondOutline className="text-purple-500" size={100} />
            </div>
            <h2 className="text-3xl font-semibold">Premium Plan</h2>
            <p className="text-gray-500 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              dolorem, facere asperiores dignissimos quo, illum expedita quis
              explicabo quod nesciunt placeat
            </p>
            <Link className="font-semibold text-xl text-purple-500" href={"#"}>
              See Premium Feature
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
