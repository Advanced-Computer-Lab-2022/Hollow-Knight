import { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useAuthContext } from "../hooks/useAuthContext";


const AdminDiscountCourses = () => {
  const [checked, setChecked] = useState(false);
  const [courses, setCourses] = useState(null);
  const [start_date, setStart_date] =useState(null);
  const [end_date, setEnd_date] =useState(null);
  const [checklist, setCheckList] = useState([])
  const [discount, setDiscount] = useState("");
  const [discountError, setDiscountError] = useState(false);
  const [startError, setStartError] =useState(false);
  const [endError, setEndError] =useState(false);
  const { user } =  useAuthContext();
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

const handlestart = (newValue) => {
  var day =newValue.$d.getDate();
  var year =newValue.$d.getFullYear();
  var month =newValue.$d.getMonth();
  console.log(day,month,year)
 var date = new Date(year,month,day)

  console.log(date)
 setStart_date(date);

};
const handleend = (newValue) => {
var day =newValue.$d.getDate();
var year =newValue.$d.getFullYear();
var month =newValue.$d.getMonth();
console.log(day,month,year)
var date = new Date(year,month,day)

console.log(date)
setEnd_date(date);
};

    const selectdiscount = async (e) => {
    e.preventDefault()
    console.log("hi");
    argum = {discount, checklist, start_date,end_date}
    console.log(argum)
    if(user){

    if(!start_date){
        setStartError(true)
        return
    }
    if(!end_date){
      setEndError(true)
      return
    }
    if(!discount){
      setDiscountError(true)
      return
    }
    const response = await fetch("/api/courses/selectdiscounts", {
        method: "POST",
        body: JSON.stringify(argum),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
        },
      });
      if(response.ok){
        console.log("success")
        window.location.reload()
      }}
    }

    const alldiscount = async (e) => {
      argum = {discount, start_date,end_date}
      console.log(argum)
      if(user){

        if(!start_date){
          setStartError(true)
          return
      }
      if(!end_date){
        setEndError(true)
        return
      }
      if(!discount){
        setDiscountError(true)
        return
      }
      
      const response = await fetch("/api/courses/alldiscounts", {
          method: "POST",
          body: JSON.stringify(argum),
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user.token}`
          },
        });
        if(response.ok){
          console.log("success")
          window.location.reload()
        }}
      }
  return (
    <div className="courses">
    <Box sx = {{maxWidth:500}}>
    <label>Discount:</label>
            <input
            type="number"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
            />

{discountError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Choose A Discount
</Typography>

}
<br></br>
<br></br>



</Box>

    
    <LocalizationProvider dateAdapter={AdapterDayjs}  >

<DesktopDatePicker sx={{spacing: 4}} 
  label="Start Date"
  inputFormat="MM/DD/YYYY"
  value={start_date}
  onChange={handlestart}
  renderInput={(params) => <TextField {...params} />}
/>
{startError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Choose A start Date
</Typography>

}

<Typography  variant="h5"  marginBottom={4} marginTop={4}> TO </Typography>

<DesktopDatePicker
  label="End Date"
  inputFormat="MM/DD/YYYY"
  value={end_date}
  onChange={handleend}
  
  renderInput={(params) => <TextField {...params} />}
/>
{endError&&< Typography variant="h7"
marginLeft={3} 
color="red"
fontSize={20}>
You Must Choose A End Date
</Typography>

}
<Typography    > </Typography>


</LocalizationProvider>
    <Button onClick={selectdiscount}>Apply Discount to selected courses</Button>  <Button onClick={alldiscount}>Apply to all courses</Button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Box sx={{ maxWidth: 700}}>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Course Name </TableCell>
            <TableCell align="right"> Course Price </TableCell>
            <TableCell align="right">Current Discount </TableCell>
            <TableCell align="right">Start Date </TableCell>
            <TableCell align="right">End Date </TableCell>
            <TableCell align="center"> Select For Discount  </TableCell>
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
              <TableCell align="right">{course.discount.start_date}</TableCell>
              <TableCell align="right">{course.discount.end_date}</TableCell>
              <TableCell align="left"> <input type="checkbox"  onChange={() => handleChange1(course)}/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
          </div>
        );
};
export default AdminDiscountCourses;