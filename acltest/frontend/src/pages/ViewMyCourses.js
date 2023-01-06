import { useAuthContext } from "../hooks/useAuthContext";

import { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";


import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const { useState } = require("react");

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.95),
  },

  marginLeft: 0,
  width: '100%',

  height: 60,
  [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),

  height: 60,
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '70%',
      height: 45,
      [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
              width: '20ch',
          },
      },
  },
}));



const ViewMyCourses = () => {
  const [courses, setCourses] = useState(null);
  const { user } = useAuthContext();
  const [subjectf,setSubjectf]=useState("")
  const [pricef,setPricef]=useState("")
  const [searchb, setSearchb] = useState('')
  const [other,setOther]=useState(false)
  const [othervalue,setOthervalue]=useState("Insert a value")
  useEffect(() => {
    const viewCourses = async () => {

      if (user) {
        const response = await fetch(
          `/api/instructors/viewmycourses`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }

        }
        );
        const result = await response.json();

        if (response.ok) {
          setCourses(result);
          console.log(result);
        }
      };
    }
    viewCourses();
  }, [user]);


  const search = async (e) => {
    e.preventDefault()

    const searching = { searchb}
    console.log(searchb)
    const response = await fetch('/api/instructors/search', {
        method: 'POST',
        body: JSON.stringify(searching),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }

    })
    const man = await response.json()
    if (response.ok) {
        setCourses(man)
        console.log('shobak', man)
    }
    else {
        console.log('error')
    }

}

const handler=()=>{
    var newcourses
    console.log()
    var p =pricef.split(/-/)
    console.log(p[0],p[1])
    if(pricef)
    {
        newcourses= courses.filter(course => course.price<p[1]&&course.price>p[0])
    }
    if(subjectf){
        newcourses= courses.filter(course => course.subject==subjectf)
    }
    if(pricef&&subjectf){
        newcourses= courses.filter(course => course.price<p[1]&&course.price>p[0]&& course.subject==subjectf)
    }
    setCourses(newcourses)
}
  return (
    <Container className="courses">
    <Typography variant="h3"align="center"sx={{marginBottom:12,marginTop:6}}>Your Courses</Typography>
      
    <form className="Search" onSubmit={search} >

<Box maxWidth={900} marginLeft={5}>
    <Search onChange={(e) => setSearchb(e.target.value)}>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
        />
    </Search>      <Button sx={{marginLeft:113,marginTop:-11,fontSize:28}}  type="submit"  variant="contained">Search</Button>



</Box>
</form>
<Box sx={{  marginBottom:10}}>
<FormControl sx={{width:300,marginLeft:10}} >
<InputLabel id="demo-simple-select-label">subject</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={subjectf}
label="subject"
onChange={(e)=>(setSubjectf(e.target.value))}
>
<MenuItem value="Physics">Physics</MenuItem>
<MenuItem value="Mathematics">Mathematics</MenuItem>
<MenuItem value="Computer Science">Computer Science</MenuItem>

      
</Select>

</FormControl>

<FormControl sx={{width:300,marginLeft:20}}>
<InputLabel id="demo-simple-select-label">Price</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={pricef}
label="Price"
onChange={(e)=>(setPricef(e.target.value))}
>
<MenuItem  onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}}  value="100-500"> 100 - 500 </MenuItem>
<MenuItem  onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}} value="600-1000">600 - 1000</MenuItem>
<MenuItem  onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}} value="1000-3000">1000- 3000</MenuItem>
<MenuItem onClick={(e)=>(setOther(true))} value={othervalue}>{othervalue}</MenuItem>
</Select>
{other &&
        <TextField
        type="text"
        onChange={(e) =>{ setOthervalue(e.target.value) ; setPricef(e.target.value)}}
        />}
</FormControl>
<Button sx={{marginLeft:10,fontSize:26}} variant="contained"
onClick={handler}
>Filter</Button>
</Box>

      
      
      {courses &&
        courses.map((course) => (
          <div key={course._id}>
             <Card sx={{marginBottom:8,marginTop:4 ,borderRadius:8 }}>
              <Container  sx={{marginTop:5,marginBottom:5}}>
            <Typography align="center"  sx={{fontSize:35,marginBottom:3}}>
              <strong> {course.title} </strong>
             &nbsp;&nbsp;
              </Typography>

              <Typography align="center" sx={{fontSize:25,marginBottom:3}} >
              Price : {course.price} &nbsp;&nbsp;
              </Typography>

              <Typography align="center"  sx={{fontSize:25,marginBottom:8}} >
              Existing  Discounts : {course.discount.percent}  % &nbsp;&nbsp;
            </Typography>
            <Button
            
            sx={{marginRight:5,marginLeft:35}}
              variant="contained"
              onClick={() =>
                (window.location.href = `/applydiscount?courseId=${course._id}`)
              }
            
            >
              Apply Discount
            </Button>
            <Button
            sx={{marginRight:5}}
              variant="contained"
              onClick={() =>
                (window.location.href = `/viewsubtitles?courseId=${course._id}`)
              }
           
            >
              View Subtitles
            </Button>

            <Button variant="contained"
              onClick={() =>
                (window.location.href = `/report?courseId=${course._id}`)
              }
            >
              Report
            </Button></Container>
            </Card >
          </div>
        ))}
            
    </Container>
  );
};

export default ViewMyCourses;
