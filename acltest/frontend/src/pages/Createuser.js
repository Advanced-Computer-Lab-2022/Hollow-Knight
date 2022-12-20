import CreateInstructor from '../components/CreateInstructor'
import CreateTrainee from '../components/CreateTrainee'
import CreateAdmin from '../components/CreateAdmin'
import AdminNav from '../components/AdminNav'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';


const Createuser = () => {
    const [value, setValue] = React.useState('1');
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    return(
        <div className="CreateUser">
        <AdminNav state={0}/>
        <div>
            <h2>Create a user</h2>
        </div>
        <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Instructor" value="1" />
            <Tab label="Create Trainee" value="2" />
            <Tab label="Create Admin" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> <CreateInstructor /></TabPanel>
        <TabPanel value="2"><CreateTrainee /></TabPanel>
        <TabPanel value="3"><CreateAdmin /></TabPanel>
      </TabContext>
      </Box>
        </div>
        </div>
    )
}

export default Createuser