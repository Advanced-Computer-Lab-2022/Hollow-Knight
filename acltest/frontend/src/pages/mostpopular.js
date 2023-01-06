
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseCard from "../components/Coursesdetails";


const MostPopular = () => {

const [mostPopular, setMostPopular] = useState([]);
const { user } = useAuthContext();
useEffect(() => {
const fetchMostPopular = async () => {
const response = await fetch("/api/courses/mostpopular",{
method: 'GET',
headers: {
    
'Content-Type': 'application/json', 
'Authorization': `Bearer ${user.token}`

}});
const json = await response.json();

if (response.ok) {
setMostPopular(json);
}
};
if(user){
fetchMostPopular();
}
}, [user]);
return (
<div className="courses">
<h1>Most Popular Courses</h1>



{mostPopular &&
mostPopular.map((course) => (

<CourseCard key={course._id} course={course} />
))}
</div>
);
};
export default MostPopular;
