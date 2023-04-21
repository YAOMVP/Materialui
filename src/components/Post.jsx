import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="Articles">
            📝
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="This is an article"
        subheader="April 18, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Information technology"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        This website has been developed using the Material UI framework. I possess proficient knowledge in various Material UI components such as cards, icons, and theme, which have been incorporated in the website. Moreover, I have designed and implemented a dark mode theme to enhance the website's visual appeal. The website is also mobile responsive, ensuring seamless viewing across different devices. The deployment of this website has been carried out through the Heroku platform, which aligns with my prior experience in project deployment.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"orangered"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post