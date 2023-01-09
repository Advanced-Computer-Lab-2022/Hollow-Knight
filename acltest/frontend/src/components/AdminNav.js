import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AdminNav({state}) {
  const [value, setValue] = React.useState(state);
  console.log({state})
  const urladduser=`/create`
  const urlviewrequests = "/viewrequests"
  const urlviewreports = "/viewreports"
  const urlselectdiscounts = "/selectdiscounts"

  return (
    <Box sx={{ width: 1500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if(newValue === 0){
        window.location.href = urladduser
          }
          if(newValue === 1){
            window.location.href = urlviewrequests
              }
        if(newValue === 2){
        window.location.href = urlviewreports
             }
        if(newValue === 3){
        window.location.href = urlselectdiscounts
            }

        }}
      >
        <BottomNavigationAction label="Create User" icon={<RestoreIcon />} />
        <BottomNavigationAction label="View Requests" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="View Reports" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Apply Discount" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}