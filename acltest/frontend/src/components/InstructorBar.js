import { useAuthContext } from "../hooks/useAuthContext";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const { useState ,} = require("react");
const InstructorBar = () => {
    

  
  


    const apps=`/apps`
    const urlmyreview=`/Reviews`
    const urlcoursereview=`/ViewReviews`
    const urladdcourse=`/addcourse`
    const urlsearchcourse=`/instructor`
   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses`
    const urlviewrevenue=`/getpay?userId`



   
    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (

        
        <Box sx={{ bgcolor: 'background.paper' }}>
        
            <Tabs
                
               variant="fullWidth"            
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
                
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                
                 <Tab label="Home" href={apps} />
                <Tab  label="My Courses" href={urlviewmycourses} />
                <Tab label="Course Reviews"href={urlcoursereview} />
                <Tab label="My Reviews"href={urlmyreview} />
                <Tab label="Add New Course"href={urladdcourse}/>
                <Tab label="Revenues" href={urlviewrevenue}/>
                <Tab label="Search" href={urlsearchcourse}/>
                <Tab label="View all courses" href={urlallcourses}/>
            </Tabs>



        </Box>
 
    )

}
export default InstructorBar