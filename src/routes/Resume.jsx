import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <Document file="/assets/BinhLe_Resume.pdf">
      <Page pageNumber={1} />
    </Document>
  );
};

export default Resume;
