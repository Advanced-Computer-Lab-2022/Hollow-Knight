import React, { useEffect } from "react";
//import axios, * as others from "axios";
const { useState } = require("react");
const ViewPriceCo = ({ price, currencyName }) => {
  const [resultPrice, setResult] = useState(price);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "GtLEEAcvDqqAnfuIY32p4uL7j2Ogc00Z");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      fetch(
        `https://api.apilayer.com/fixer/convert?to=USD&from=${currencyName}&amount=${price}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setResult(result.result))
        .catch((error) => console.log("error", error));
    } catch {
      setResult(price);
    }
  }, [price, currencyName]);
  return <label>Price:{resultPrice}</label>;
};

export default ViewPriceCo;
