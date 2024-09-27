import React from "react";

export default function FormPreview({ data }) {
  const {
    companyName,
    companyPerso,
    companyAddress,
    companyCity,
    companyCountry,
    clientName,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    dueDate,
  } = data;
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
      <div>
        <h1>Company Name: {companyName}</h1>
        <h1>Company Person: {companyPerso}</h1>
        <h1>Company Address: {companyAddress}</h1>
        <h1>Company City: {companyCity}</h1>
        <h1>Company Country: {companyCountry}</h1>
        <h1>Client Name: {clientName}</h1>
        <h1>Client Address: {clientAddress}</h1>
        <h1>Client City: {clientCity}</h1>
        <h1>Client Country: {clientCountry}</h1>
        <h1>Invoice Number: {invoiceNumber}</h1>
        <h1>Invoice Date: {invoiceDate}</h1>
        <h1>Due Date: {dueDate}</h1>
      </div>
    </div>
  );
}
