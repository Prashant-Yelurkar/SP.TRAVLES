import React from "react";
import dynamic from "next/dynamic";

// Dynamically import PDFDownloadLink with SSR disabled
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);
import InvoicePDF from "../Components/InvoicePDF";

const GeneratePDF = () => {
  return (
    <div>
      <h1>Generate Invoice PDF</h1>
      {PDFDownloadLink && (
        <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default GeneratePDF;
