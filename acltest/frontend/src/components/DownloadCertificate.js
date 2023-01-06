const { useEffect } = require("react")

const DownloadCertificate = ()=>{
    const params = new URLSearchParams(window.location.search);
    const title = params.get("course");
    const onClick=() =>{        
        fetch("Certificate.pdf").then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = title+' Certificate.pdf';
            alink.click();

        })
    })}
useEffect(()=>{
        onClick();
    return;
},[])
return;
}
export default DownloadCertificate;