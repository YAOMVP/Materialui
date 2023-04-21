import { Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography, } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} marginTop={2}>Online Friends</Typography>
        <AvatarGroup max={100}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4500661/pexels-photo-4500661.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/310175/pexels-photo-310175.png?auto=compress&cs=tinysrgb&w=1600" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg"/>
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/6858608/pexels-photo-6858608.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/6913844/pexels-photo-6913844.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
          <img
          src="https://material-ui.com/static/images/image-list/breakfast.jpg"
          alt=""
          />
          </ImageListItem>
          <ImageListItem>
          <img
          src="https://material-ui.com/static/images/image-list/burgers.jpg"
          alt=""
          />
          </ImageListItem>
          <ImageListItem>
          <img
          src="https://material-ui.com/static/images/image-list/camera.jpg"
          alt=""
          />
          </ImageListItem>
          </ImageList>
          <Typography variant='h6' fontWeight={100}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3073694/pexels-photo-3073694.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3823271/pexels-photo-3823271.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/6858604/pexels-photo-6858604.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Typography>
      </Box>
    </Box>

  )
}

export default Rightbar