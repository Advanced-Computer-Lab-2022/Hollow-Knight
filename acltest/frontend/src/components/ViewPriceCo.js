import React, { useEffect } from "react";
//import axios, * as others from "axios";
const { useState } = require("react");
const ViewPriceCo = ({ price, currencyName }) => {
  const [resultPrice, setResult] = useState(price);
  useEffect(() => {
    // var myHeaders = new Headers();
    // myHeaders.append("apikey", "GtLEEAcvDqqAnfuIY32p4uL7j2Ogc00Z");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      fetch(
        `https://v6.exchangerate-api.com/v6/0285f55d96646cf9cb966f57/latest/USD`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setResult(result.conversion_rates[currencyName]*price);
        });
    } catch (error) {
      setResult(price);
    }
  }, [price, currencyName]);
  return <label>{resultPrice}</label>;
};

export default ViewPriceCo;
