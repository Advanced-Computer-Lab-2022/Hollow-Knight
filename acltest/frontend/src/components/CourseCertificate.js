import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
const CourseCertificate = (props) => {
  return (
    <div className="App">
      <PDFDownloadLink filename="Certificate" document={<PDFFile />}>
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
