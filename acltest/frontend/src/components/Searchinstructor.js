import { useState } from "react"
import CoursesDetails from "./Coursesdetails"
import { useAuthContext } from "../hooks/useAuthContext";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



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

const SearchInstructor = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [Courses, setCourses] = useState(null)
    const [subject, setSubject] = useState('')
    const [price, setPrice] = useState('')
    const [subjectf,setSubjectf]=useState("")
    const [pricef,setPricef]=useState("")
    const [searchb, setSearchb] = useState('')
    const { user } = useAuthContext();
    const [other,setOther]=useState(false)
    const [othervalue,setOthervalue]=useState("Insert a value")
    //fetch courses
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
            newcourses= Courses.filter(course => course.price<p[1]&&course.price>p[0])
        }
        if(subjectf){
            newcourses= Courses.filter(course => course.subject==subjectf)
        }
        if(pricef&&subjectf){
            newcourses= Courses.filter(course => course.price<p[1]&&course.price>p[0]&& course.subject==subjectf)
        }
        setCourses(newcourses)
    }

    return (
        <div>
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
          <MenuItem onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}} value="100-500"> 100 - 500 </MenuItem>
          <MenuItem onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}} value="600-1000">600 - 1000</MenuItem>
          <MenuItem onClick={(e)=>{(setOther(false));setOthervalue("insert A value")}} value="1000-3000">1000- 3000</MenuItem>
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

     
            <div className="courses">
                {Courses && Courses.map(Courses => (
                    <CoursesDetails key={Courses._id} Courses={Courses} />
                ))}
            </div>


  
       
       
        </div>
    )

}

export default SearchInstructor