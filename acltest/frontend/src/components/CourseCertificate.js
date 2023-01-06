import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button,Card ,Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const CourseCertificate = (props) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Certificate.pdf').then(response => {
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
      <Card sx={{ height: 650, marginTop: 6,marginLeft:25,width:1000 }}>
      <PDFFile />
      <Button
        variant="contained"
        fullWidth
        endIcon={<DownloadIcon sx={{width:40,height:40}} />}
        onClick={onButtonClick}
      >
        <Typography variant="h5" align="left" gutterBottom>
          Download
        </Typography>
      </Button>
      </Card >
      
      <br></br>
    </div>
  );
};
export default CourseCertificate;
