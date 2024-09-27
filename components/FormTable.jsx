"use client";
import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function FormTable({ updateTableData }) {
  const [tableData, setTableData] = useState([
    {
      itemDescription: "",
      qty: "",
      rate: "",
      tax: "",
      amount: "",
    },
  ]);

  const addRow = () => {
    setTableData([
      ...tableData,
      {
        itemDescription: "",
        qty: "",
        rate: "",
        tax: "",
        amount: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;
    if (name == "qty" || name == "rate") {
      const qty = parseFloat(updatedData[index].qty);
      const rate = parseFloat(updatedData[index].rate);
      if (!isNaN(qty) && !isNaN(rate)) {
        updatedData[index].amount = (qty * rate).toFixed(2);
      } else {
        updatedData[index].amount = "";
      }
    }
    setTableData(updatedData);
    updateTableData(updatedData);
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-sm  sm:rounded-lg my-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item Description
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Tax
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="bg-white   hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <input
                    type="text"
                    placeholder=" Item Description"
                    className="border-none p-1 bg-transparent w-60"
                    name="itemDescription"
                    value={item.itemDescription}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </th>
                <td className="px-6 py-4">
                  {" "}
                  <input
                    type="number"
                    placeholder="2"
                    className="border-none p-1 bg-transparent w-20"
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <input
                    type="number"
                    placeholder="5"
                    className="border-none p-1 bg-transparent w-20"
                    name="rate"
                    value={item.rate}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <input
                    type="number"
                    placeholder="$10"
                    className="border-none p-1 bg-transparent w-20"
                    name="tax"
                    value={item.tax}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <input
                    type="number"
                    placeholder="$999"
                    className="border-none p-1 bg-transparent w-28"
                    name="amount"
                    value={item.amount}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    className="text-red-500"
                    onClick={() => removeRow(index)}
                  >
                    <AiOutlineCloseCircle className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
            <button
              type="button"
              className="text-blue-500 my-3 gap-2 font-bold flex items-center"
              onClick={addRow}
            >
              {" "}
              <AiOutlinePlusCircle className="text-xl" />{" "}
              <span>Add new line item</span>
            </button>
          </tbody>
        </table>
      </div>
    </>
  );
}
