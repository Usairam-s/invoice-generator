import React from "react";
import {
  BsCurrencyDollar,
  BsFileText,
  BsGraphUp,
  BsCardChecklist,
  BsFillFileEarmarkCheckFill,
  BsFillPeopleFill,
  BsClockHistory,
  BsFillWalletFill,
} from "react-icons/bs";
import ThemeLink from "./ThemeLink";

const data = [
  {
    id: 1,
    heading: "Generate Invoices",
    description: "Easily create and customize professional invoices.",
    icon: BsFileText,
  },
  {
    id: 2,
    heading: "Manage Clients",
    description: "Keep track of all your clients in one place.",
    icon: BsFillPeopleFill,
  },
  {
    id: 3,
    heading: "Track Payments",
    description: "Monitor your payments and outstanding balances.",
    icon: BsCurrencyDollar,
  },
  {
    id: 4,
    heading: "Payment History",
    description: "View payment history and get detailed reports.",
    icon: BsClockHistory,
  },
  {
    id: 5,
    heading: "Invoice Templates",
    description: "Choose from various templates for your invoices.",
    icon: BsCardChecklist,
  },
  {
    id: 6,
    heading: "Financial Reports",
    description: "Generate reports for better financial insights.",
    icon: BsGraphUp,
  },
  {
    id: 7,
    heading: "Payment Reminders",
    description: "Send automatic reminders for due payments.",
    icon: BsFillFileEarmarkCheckFill,
  },
  {
    id: 8,
    heading: "Manage Wallet",
    description: "Manage your wallet and payment methods.",
    icon: BsFillWalletFill,
  },
];

export default function Features() {
  return (
    <div className="bg-slate-900 md:py-16 flex flex-col items-center  py-8 md:px-16 px-4 text-white">
      <h2 className="text-4xl md:text-5xl md:text-center font-semibold mb-10">
        Features of Invoice Geneartor
      </h2>
      <div className="grid grid-cols-1 mt-4 items-center justify-center sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex border-dashed border rounded-lg  flex-col gap-y-5 p-6"
          >
            {/* Dynamically render the icon */}
            <item.icon className="text-purple-500" size={40} />
            <h2 className="text-2xl font-semibold">{item.heading}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
      <ThemeLink
        className={"bg-purple-600 hover:bg-purple-700 w-fit mt-12"}
        title={"Create your invoice free"}
        href={"#"}
      />
    </div>
  );
}
