import ViewRequests from '../components/ViewRequests'
import ViewRefunds from '../components/ViewRefunds'
import AdminNav from '../components/AdminNav'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';

const RequestsView = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


    return(
        <div className="ViewRequests">
        <AdminNav state={1}/>
        <div>
            <h2>Requests And Refunds</h2>
        </div>
        <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Access Requests" value="1" />
            <Tab label="Refund Requests" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"> <ViewRequests /></TabPanel>
        <TabPanel value="2"><ViewRefunds /></TabPanel>
      </TabContext>
      </Box>
        </div>
        </div>
    )
}

export default RequestsView