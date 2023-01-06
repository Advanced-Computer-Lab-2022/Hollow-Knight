import Typography from '@mui/material/Typography';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';;
const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
    //make space between cards
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  title: {
    fontSize: 14,
  },
  author: {
    marginTop: 'auto'
  },
  rating: {
    marginTop: 'auto'
 },
 
}));

const CourseCard = ({course }) => {
  const URL = "/instructor/coursedetails/"+course._id;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="iframe"
        image={course.video} 
        title={course.title}
        onClick={() => window.location.href=URL}
        
      />
      <CardContent>
        <Typography variant="h5" component="h2"         onClick={() => window.location.href=URL}
className={classes.title}>
          {course.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.author}>
          by {course.author}
        </Typography>
        <Typography variant="body2" component="p" className={classes.rating}>
        subject: {course.subject}
        </Typography>
        <Rating name="read-only" value={course.overallRating} readOnly />

      </CardContent>
    </Card>
  );
}

export default CourseCard;
