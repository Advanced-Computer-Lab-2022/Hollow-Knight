import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button,Card } from "@mui/material";

const CourseCertificate = (props) => {
  return (
    <div className="App">
      <Card sx={{ height: 580, marginTop: 6 }}>
      <PDFFile />
      <br></br>
      <PDFDownloadLink filename="Certificate" document={<PDFFile />}>
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      </Card>
    </div>
  );
};
export default CourseCertificate;
