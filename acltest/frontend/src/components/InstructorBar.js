
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
const { useState, useEffect, } = require("react");
export 
const InstructorBar = () => {
    

  
  


    const apps=`/apps`
    const urlmyreview=`/Reviews`
    const urlcoursereview=`/ViewReviews`
    const urladdcourse=`/addcourse`

   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses`
    const urlviewrevenue=`/getpay`
    const urlallreports='/viewmyreports'


   
    const [value, setValue] = useState(10);



  
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
                
                 <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Profile</Typography>} href={apps} />
                <Tab   label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >My Courses</Typography>} href={urlviewmycourses} />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Course Reviews</Typography>}  href={urlcoursereview}  />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >My Reviews</Typography>} href={urlmyreview}   />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Add New Course</Typography>} href={urladdcourse}/>
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >Revenues</Typography>} href={urlviewrevenue}/>

                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >View all courses</Typography>} href={urlallcourses} />
                <Tab  label={<Typography sx={{fontFamily:"Sans-serif	",color:"Indigo",fontSize:14}} >My Reports</Typography>} href={urlallreports} />
            </Tabs>



        </Box>
 
    )

}
export default InstructorBar