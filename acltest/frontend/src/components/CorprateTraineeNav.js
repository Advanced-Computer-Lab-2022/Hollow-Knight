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
  
    const urlviewmycourses = `/getmycourses?userId=${userId}`;
    const urlallcourses = `/viewallcourses`;
    const urlprofile = `/traineeprofile`;
    

    
   
    const [value, setValue] = useState(8);



  
    const handleChange = (event,newValue) => {
      console.log(newValue,"wdewde")
    
        setValue(newValue);

    } 
    return (
<div>        
        <Box sx={{ bgcolor: 'background.paper' }}>
        
            <Tabs
                 value={value}
                 variant="fullWidth"            
                  textColor="secondary"
                  indicatorColor="secondary"
                  
                  onChange={handleChange}
                  
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
            >
                <Tab   label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Profile</Typography>}  href={urlprofile}  />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >My Courses</Typography>} href={urlviewmycourses} />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >View All Courses</Typography>}  href={urlallcourses}  />
            </Tabs>
        


        </Box>

 </div>
 
    )


}

export default CorprateTraineeNav