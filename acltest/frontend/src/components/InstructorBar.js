
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const { useState, useEffect, } = require("react");
export 
const InstructorBar = () => {
    

  
  


    const apps=`/apps`
    const urlmyreview=`/Reviews`
    const urlcoursereview=`/ViewReviews`
    const urladdcourse=`/addcourse`
    const urlsearchcourse=`/instructor`
   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses`
    const urlviewrevenue=`/getpay?userId`



   
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
                
                 <Tab value={0} label="Home" href={apps} />
                <Tab  value={1} label="My Courses" href={urlviewmycourses} />
                <Tab value={2} label="Course Reviews"href={urlcoursereview}  />
                <Tab label="My Reviews"href={urlmyreview}   />
                <Tab label="Add New Course"href={urladdcourse}/>
                <Tab label="Revenues" href={urlviewrevenue}/>
                <Tab label="Search" href={urlsearchcourse}/>
                <Tab label="View all courses" href={urlallcourses} />
            </Tabs>



        </Box>
 
    )

}
export default InstructorBar