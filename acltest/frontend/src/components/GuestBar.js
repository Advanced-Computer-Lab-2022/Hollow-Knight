
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const { useState, useEffect, } = require("react");
export 
const GuestBar = () => {
    

  

    const urlsearchcourse=`/instructor`
    const urlallcourses=`/viewallcourses`




   
    const [value, setValue] = useState(0);



  
    const handleChange = (event,newValue) => {
      console.log(newValue,"wdewde")
     
        //setValue(newValue);

    } 
  

    
    return (

        
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
                
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Search</Typography>} href={urlsearchcourse}/>
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >View all courses</Typography>} href={urlallcourses} />
            </Tabs>



        </Box>
 
    )

}
export default GuestBar