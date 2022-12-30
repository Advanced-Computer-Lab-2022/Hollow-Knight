import Typography from '@mui/material/Typography';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';;

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
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
}}));

const CourseCard = ({course }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
       
        title={course.title}
      />
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {course.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.author}>
          by {course.author}
        </Typography>
        <Typography variant="body2" component="p" className={classes.rating}>
        subject: {course.rating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
