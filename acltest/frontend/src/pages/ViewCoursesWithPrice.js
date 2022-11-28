import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
//import axios, * as others from "axios";
import ViewPriceCo from "../components/ViewPriceCo";
const countryToCurrency = require("country-to-currency");
//var fx = require("money");
const ViewCoursesWithPrice = () => {
  const [courses, setCourses] = useState(null);
  const [currencyName, setCurrencyName] = useState("");
  const param = useParams();

  //const [countryAbb, setCountryAbb] = useState("USD");
  //const [convertedPrice, setConvertedPrice] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();
      const fetchCountryResponse = fetch("/users/" + param.id);
      const jsonUser = await (await fetchCountryResponse).json();
      if (response.ok) {
        setCourses(json);
      }
      setCurrencyName(countryToCurrency[jsonUser.countryAbb]);
      console.log(countryToCurrency[jsonUser.countryAbb]);
      //setCountryAbb(jsonUser.countryAbb);
      //console.log(fx.convert(1000, { from: "GBP", to: "HKD" }));
    };

    fetchCourses();
  }, [param]);
  return (
    <div className="App">
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
            <strong>Course Title:</strong>
            {course.title} &nbsp;&nbsp;
            <strong>Total Hours:</strong>
            {course.hours} &nbsp;&nbsp;
            <strong>Course:</strong>
            {course.overallRating}
            <strong>Price:</strong>
            <ViewPriceCo price={course.price} currencyName={currencyName} />
          </div>
        ))}
    </div>
  );
};
export default ViewCoursesWithPrice;
