import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

export default function Steps() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 mx-auto flex items-center justify-center">
      <div>
        <h2 className="text-3xl md:text-5xl md:text-center font-semibold mb-8">
          Create your Invoice in less than 2 minutes
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <p className="p-2 flex justify-center items-center border-2 border-slate-400 rounded-full h-8 w-8">
              1
            </p>
            <p>Invoice Details</p>
            <BsChevronRight size={20} />
          </div>

          <div className="flex items-center gap-3">
            <p className="p-2 flex justify-center items-center border-2 border-slate-400 rounded-full h-8 w-8">
              2
            </p>
            <p>Bank Details (Optional)</p>
            <BsChevronRight size={20} />
          </div>

          <div className="flex items-center gap-3">
            <p className="p-2 flex justify-center items-center border-2 border-slate-400 rounded-full h-8 w-8">
              3
            </p>
            <p>Select Design & Invoice Color</p>
            <BsChevronRight className="md:hidden inline" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
