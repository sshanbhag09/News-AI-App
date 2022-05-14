import React from 'react'
import { Card,CardActions,CardActionArea,cardContent,CardMedia,CardContent ,CardHeader} from "@material-ui/core";
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import useStyles from './style';

function NewsCard({article:{description,publishedAt,source,title,url,urlToImage}}) {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea href={url} target="_blank">
      <CardMedia
      className={classes.media}
      component="img"
      height="140"
      image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
      alt="news"
    />
      <CardHeader
        subheader={title}
      />
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
      <Typography variant="body2" color="textSecondary" component="h1">{(new Date(publishedAt)).toDateString()}</Typography>
      </div>
     
    
    <CardContent className={classes.descBox}>
      {/* <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography> */}
      <Typography variant="body2" color="text.secondary" component="p" >
        {description}
      </Typography>
    </CardContent>
    </CardActionArea>
    <CardActions className= {classes.cardActions}>
      <Button size="small" color="primary">Share</Button>
      <Button size="small" href={url}>Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default NewsCard;