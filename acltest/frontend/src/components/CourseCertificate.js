import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button,Card } from "@mui/material";

const CourseCertificate = (props) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Sample.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Certificate.pdf';
            alink.click();
        })
    })
}
  return (
    <div className="App">
      <Card sx={{ height: 580, marginTop: 6 }}>
      <PDFFile />
      <br></br>
      <h3>Click on below button to download PDF file</h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>

      </Card>
    </div>
  );
};
export default CourseCertificate;
