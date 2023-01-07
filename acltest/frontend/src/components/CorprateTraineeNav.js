import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import ViewCoursesForTrainee from '../pages/ViewCoursesForTrainee';
import Wallet from '../pages/Wallet';
import SearchCoursePage from '../pages/SearchCoursePage';
import { Typography } from '@mui/material';
const { useState, useEffect, } = require("react");

const CorprateTraineeNav = ()=>{
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    const urlsearchcourse = `/SearchCoursePage?userId=${userId}`;
    const urlviewmycourses = `/getmycourses?userId=${userId}`;
    const urlallcourses = `/viewallcoursesfortrainee`;
    const urlprofile = `/traineeprofile`;
    

    
   
    const [value, setValue] = useState(0);



  
    const handleChange = (event,newValue) => {
      console.log(newValue,"wdewde")
    
        setValue(newValue);

    } 
    return (
<div>        
        <Box sx={{ bgcolor: 'background.paper' }}>
        
            <Tabs
                
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                <Tab value={0}  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Profile</Typography>}  href={urlprofile}  />
                <Tab value={1} label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >My Courses</Typography>} href={urlviewmycourses} />
                <Tab value={2}  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Search Course</Typography>}  href={urlsearchcourse}  />
                <Tab value={3}  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >View All Courses</Typography>}  href={urlallcourses}  />
            </Tabs>
        


        </Box>

 </div>
 
    )


}

export default CorprateTraineeNav