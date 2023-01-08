import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import CourseCard from "../components/Coursesdetails";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, Grid,Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Container } from "@mui/system";
import Embed2 from "../components/Embed2"
import YoutubeEmbed from "../components/YoutubeEmbed";

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

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [subjectf,setSubjectf]=useState("")
  const [pricef,setPricef]=useState("")
  const [searchb, setSearchb] = useState('')
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses",{
        method: 'GET',
        headers: {

          'Content-Type': 'application/json',


        }
    });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setCourses(json);
        
      }
    };
        fetchCourses();
    
  }, [user]);

  const search = async (e) => {
    var newcourses
    var newcourses2
    var newcourses3
    e.preventDefault()
    console.log(searchb)
    const searching = { searchb}
    if(searchb){
     // newcourses= courses.filter(course => course.subject==searchb)
      newcourses2 = courses.filter(course => course.author==searchb)
      newcourses3 = courses.filter(course => course.title==searchb)
      setCourses([ ...newcourses2, ...newcourses3]);


    }
    if(searchb.length === 0){
      const response = await fetch("/api/courses",{
        method: 'GET',
        headers: {

          'Content-Type': 'application/json',


        }
    });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setCourses(json);
        
      }
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
};

  
  return (
    <Box>
    <form className="Search" onSubmit={search} >

    <Box maxWidth={900} marginLeft={20}>
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
  <Box sx={{  }}>
      <FormControl sx={{width:300,marginLeft:23}} >
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
          <MenuItem value="100-500"> 100 - 500 </MenuItem>
          <MenuItem value="600-1000">600 - 1000</MenuItem>
          <MenuItem value="1000-3000">1000- 3000</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{marginLeft:10,fontSize:26}} variant="contained"
        onClick={handler}
        >Filter</Button>
    </Box>
    <div className="courses">



<Container>

  
<Grid container>
{courses &&
  courses.map((course) => (
    <Grid item  key={course._id} xs={6}>
      <p>
      
        
      <Card 
      
      sx={{marginBottom:2,marginTop:4 ,borderRadius:3, width:550,height:660}}>
      <Container  sx={{marginTop:5,marginBottom:5}}>
      <Typography
      align="center"  
      sx={{fontSize:30,marginBottom:2}}>
        <strong>{course.title}</strong>
         &nbsp;&nbsp;
        </Typography>
        
        <Typography 
        align="center" 
         sx={{fontSize:22,marginBottom:1}}>
        Total Hours : {course.total_hours} &nbsp;&nbsp;
        </Typography>
        
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:0}}>
        Rating : {course.overallRating}
        </Typography>

         
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:0}}>
        Instructor : {course.name}
        </Typography>

        <Stack direction="row" spacing={2} sx={{marginLeft:24,marginTop:1}}>
        <Typography  
        align="center" 
        sx={{fontSize:25,marginBottom:2,marginTop:-0.5}}>
        Price : {course.price}
        </Typography>
        <Typography    align="center"  sx={{fontSize:22,marginTop:9}}> 
        </Typography>
        </Stack>
        {course.video &&
        <Embed2 embedId={course.video} />
        }
        </Container>
        </Card>
        
     
        
      </p>
      </Grid>
   
  ))}
     </Grid>
   </Container>
</div>
    </Box>
  );
};
export default ViewCourses;
