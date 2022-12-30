
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";



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
{mostPopular &&
mostPopular.map((course) => (
<div key={course._id}>
<p>
<strong>Course Title:</strong>
{course.title} &nbsp;&nbsp;
<strong>Total Hours:</strong>
{course.total_hours} &nbsp;&nbsp;
<strong>Course Rating:</strong>
{course.overallRating}
</p>
</div>
))}
</div>
);
};
export default MostPopular;
