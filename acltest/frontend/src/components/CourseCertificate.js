import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
const CourseCertificate = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} filename="Certificate">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      <br></br>
    </div>
  );
};
export default CourseCertificate;
