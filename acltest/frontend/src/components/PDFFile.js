import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { Typography } from "@mui/material";
import certificate from "./Certificate.png";
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
    width: 1000,
    height: 600,

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
<div>
<img  src={certificate} style={styles.image} />
</div>
  );
};

export default PDFFile;
