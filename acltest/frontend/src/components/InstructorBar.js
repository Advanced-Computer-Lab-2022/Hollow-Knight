
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const { useState ,} = require("react");
const InstructorBar = ({x}) => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const apps=`/apps?userId=${userId}`
    const urlmyreview=`/Reviews?userId=${userId}`
    const urlcoursereview=`/ViewReviews?userId=${userId}`
    const urladdcourse=`/addcourse?userId=${userId}`
    const urlsearchcourse=`/instructor?userId=${userId}`
   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses?userId=${userId}`
    const urlviewrevenue=`/getpay?userId=${userId}`



    var v=parseInt(x)
    const [value, setValue] = useState(v);

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
                <Tab label="Report A problem" href={urladdcourse}/>
                <Tab label="Search" href={urlsearchcourse}/>
                <Tab label="View all courses" href={urlallcourses}/>
            </Tabs>
        </Box>
    )

}
export default InstructorBar