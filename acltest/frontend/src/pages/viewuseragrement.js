import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { List, ListItem, ListItemText } from "@mui/material";
const useStyles = makeStyles(() => ({
  root: {
    padding: '2px 4px',
    
  },
  //make the paper responsive
  
  title: {
    fontFamily: 'Raleway, sans-serif',
    color: '#0074D9',
  },
  text: {
    fontFamily: 'Open Sans, sans-serif',
  },
  
}));

const UserAgreement  = () => {
   const classes = useStyles();
    //userAgreement for payment and refund policy
   
  return (
    <Paper className={classes.root}>
    <Typography className={classes.title} variant="h5" component="h3">
      User Agreement
    </Typography>
    <Typography className={classes.text} component="p">
      By using our service, you agree to the following terms and conditions:
    </Typography>
    <Typography className={classes.text} component="p">
      Payment: All payments for our service must be made in advance. We accept major credit cards and PayPal.
    </Typography>
    <Typography className={classes.text} component="p">
      Refund policy:
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          className={classes.text}
          primary="If you are not satisfied with our service, you may request a full refund within 14 days of your purchase."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          className={classes.text}
          primary="After 14 days, no refunds will be given."
        />
      </ListItem>
    </List>
    <img
      className={classes.image}
      src="	https://smallimg.pngkey.com/png/small/50-509635_cu…guarantee-100-customer-satisfaction-guarantee.png
"
      alt="Satisfaction guarantee"
    />
    <Typography className={classes.text} component="p">
      Changes to terms: We reserve the right to change these terms and conditions at any time. Any changes will be posted on this page.
    </Typography>
    <Typography className={classes.text} component="p">
      Contact us: If you have any questions or concerns, please contact us at support@ourservice.com.
    </Typography>
  </Paper>

  );
};
export default UserAgreement;