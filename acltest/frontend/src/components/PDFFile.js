import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { Typography } from "@mui/material";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 30,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document filename="Certificate">
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Typography sx={{ fontSize: 40, marginBottom: 2 ,marginLeft:35}}>
          Course Certificate
        </Typography>
        <Typography sx={{ fontSize: 20, marginBottom: 2 ,marginLeft:3}}>
          Congratulations on completing the course.
        </Typography>
        <Typography sx={{ fontSize: 20, marginBottom: 2 ,marginLeft:3}}>
          This Certificate proves that you successfully finished 100% of the
          course content
        </Typography>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
