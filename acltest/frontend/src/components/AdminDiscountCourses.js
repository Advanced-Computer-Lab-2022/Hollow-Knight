import { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdminDiscountCourses = () => {
  const [checked, setChecked] = useState(false);
  const [courses, setCourses] = useState(null);
  const [checklist, setCheckList] = useState([])
  const [discount, setDiscount] = useState("");
  var argum;

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };


    fetchCourses();
  }, []);

  const handleChange1 = async (course) => {
    if(checklist.indexOf(course._id) > -1){
        checklist.splice(checklist.indexOf(course._id), 1);
    }
    else{
    checklist.push(course._id)
    }
   console.log(checklist)
}
    const selectdiscount = async (e) => {
    e.preventDefault()
    console.log("hi");
    argum = {discount, checklist}
    console.log(argum)
    const response = await fetch("/api/courses/selectdiscounts", {
        method: "POST",
        body: JSON.stringify(argum),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.ok){
        console.log("success")
      }
    }
  return (
    <div className="courses">

    <label>Discount:</label>
            <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            />
    <button onClick={selectdiscount}>Apply Discount to selected courses</button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Price</TableCell>
            <TableCell align="right">Current Discount</TableCell>
            <TableCell align="right">Select For Discount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses &&
            courses.map((course) =>  (
            <TableRow
            key={course._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {course.title}
              </TableCell>
              <TableCell align="right">{course.price}</TableCell>
              <TableCell align="right">{course.discount.percent}</TableCell>
              <TableCell align="left"> <input type="checkbox"  onChange={() => handleChange1(course)}/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        );
};
export default AdminDiscountCourses;