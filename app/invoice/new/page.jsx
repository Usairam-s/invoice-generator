"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import React, { useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlinePrinter,
  AiOutlineEye,
  AiOutlineSend,
  AiOutlineSave,
  AiOutlineForm,
} from "react-icons/ai";

export default function CreateInvoice() {
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    companyPerson: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientName: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);

    const combinedData = {
      ...formData,
      tableData,
    };
    console.log(combinedData);
  };

  const updateTableData = (newTableData) => {
    setTableData(newTableData);
  };

  return (
    <div className="bg-slate-50 px-4 md:px-16 py-6 md:py-16">
      <div className="flex items-center justify-between">
        <div className="md:flex-row flex flex-col justify-start md:items-center gap-4">
          <button
            onClick={() => setPreview(!preview)}
            className={`flex rounded-md items-center p-2  font-medium  gap-2 ${
              preview ? "bg-purple-700 text-white" : "bg-slate-200 border-2"
            }`}
          >
            {" "}
            {preview ? <AiOutlineForm /> : <AiOutlineEye />}
            <span>{preview ? "Edit Form" : "Preview"}</span>
          </button>
          <button className="flex items-center rounded-md p-2 bg-purple-700 font-medium text-white gap-2">
            {" "}
            <AiOutlinePrinter className="size-6" /> <span>Print</span>
          </button>
          <button className="flex items-center rounded-md p-2 bg-purple-700 font-medium text-white gap-2">
            {" "}
            <AiOutlineCloudDownload className="size-6" /> <span>Download</span>
          </button>
        </div>

        <div className="md:flex-row flex flex-col justify-start md:items-center gap-4">
          <button className="flex rounded-md items-center p-2 bg-black font-medium text-white gap-2">
            {" "}
            <AiOutlineSend className="size-6" /> <span>Send</span>
          </button>
          <button className="flex rounded-md items-center p-2 bg-black font-medium text-white gap-2">
            {" "}
            <AiOutlineSave className="size-6" /> <span>SendOnline</span>
          </button>
        </div>
      </div>

      {/* Invoice Form */}

      {/* use ternary htmlFor preview */}
      {preview ? (
        <FormPreview data={formData} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl mx-auto mt-12 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 "
        >
          <div className="flex  items-center justify-between">
            <div className="flex items-center justify-center h-24 w-40">
              <label
                htmlFor="dropzone-file"
                className="flex  items-center justify-center h-24 w-40  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  "
              >
                <div className="flex flex-col items-center justify-center ">
                  <svg
                    className="w-8 h-8  text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-xs mt-2 text-gray-500">
                    PNG (240 x 240)px
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
          </div>

          <div className="flex flex-col justify-start mt-6 w-1/2 gap-4">
            <input
              type="text"
              placeholder="Your Company"
              className="border-none p-1"
              name="companyName"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Your Name"
              className="border-none p-1"
              name="companyPerson"
              value={formData.companyPerson}
              onChange={(e) =>
                setFormData({ ...formData, companyPerson: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Company Address"
              className="border-none p-1"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={(e) =>
                setFormData({ ...formData, companyAddress: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City, State, Zip"
              className="border-none p-1"
              name="companyCity"
              value={formData.companyCity}
              onChange={(e) =>
                setFormData({ ...formData, companyCity: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="country"
              className="border-none p-1"
              name="companyCountry"
              value={formData.companyCountry}
              onChange={(e) =>
                setFormData({ ...formData, companyCountry: e.target.value })
              }
            />
          </div>

          {/* Client form */}
          <div className="flex gap-10 justify-between">
            {/* Left side */}
            <div className="flex flex-col justify-start mt-6 w-1/2  gap-4">
              <h2 className="text-xl font-bold">Bill to</h2>
              <input
                type="text"
                placeholder=" Name"
                className="border-none p-1"
                name="clientName"
                value={formData.clientName}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Address"
                className="border-none p-1"
                name="clientAddress"
                value={formData.clientAddress}
                onChange={(e) =>
                  setFormData({ ...formData, clientAddress: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="City, State, Zip"
                className="border-none p-1"
                name="clientCity"
                value={formData.clientCity}
                onChange={(e) =>
                  setFormData({ ...formData, clientCity: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="country"
                className="border-none p-1"
                name="clientCountry"
                value={formData.clientCountry}
                onChange={(e) =>
                  setFormData({ ...formData, clientCountry: e.target.value })
                }
              />
            </div>

            {/* right side */}
            <div className="flex flex-col justify-start mt-6 w-1/2  gap-4">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="invoiceNumber" className="font-semibold ">
                  Invoice Number #
                </label>
                <input
                  type="text"
                  id="invoiceNumber"
                  placeholder="Invoice 202"
                  className="border-none p-1 w-[145px] justify-end flex"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, invoiceNumber: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-2 ">
                <label htmlFor="invoiceDate" className="font-semibold ">
                  Invoice Date
                </label>
                <input
                  type="date"
                  id="invoiceDate"
                  className="border-none p-1"
                  name="invoiceDate"
                  value={formData.invoiceDate}
                  onChange={(e) =>
                    setFormData({ ...formData, invoiceDate: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="dueDate" className="font-semibold ">
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  className="border-none p-1"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={(e) =>
                    setFormData({ ...formData, dueDate: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          {/* table */}
          <FormTable updateTableData={updateTableData} />
          <button
            type="submit"
            className="bg-purple-700 text-white p-2 rounded-md"
          >
            Create Invoice
          </button>
        </form>
      )}
    </div>
  );
}
