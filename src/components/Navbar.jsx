import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu,MenuItem, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({theme}) =>({
  display:"none" , 
  alignItems:"center" , 
  gap:"20px", 
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

//If it is a small screen, just show avator no notifications and mails
const UserBox = styled(Box)(({theme}) =>({
  display:"flex" , 
  alignItems:"center" , 
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
                OLIVIA
            </Typography>
            <Pets sx={{display:{xs:"block",sm:"none"}}}/>
            <Search><InputBase placeholder="Search..." /></Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
              <Avatar sx={{
                width:30,
                height:30
              }} src="https://media.istockphoto.com/id/905347862/photo/brisbane-city-skyline-and-brisbane-river-at-twilight.jpg?s=612x612&w=0&k=20&c=MfCWeauVl9IuoXYbnx-YOSXiibvy84nfkEMbKFCFa7g=" 
              onClick={(e) => setOpen(true)}
              />
            </Icons>
            <UserBox>
            {/* If it is a small screen, just show avator no notifications and mails */}
            <Avatar sx={{
                width:30,
                height:30
              }} src="https://media.istockphoto.com/id/905347862/photo/brisbane-city-skyline-and-brisbane-river-at-twilight.jpg?s=612x612&w=0&k=20&c=MfCWeauVl9IuoXYbnx-YOSXiibvy84nfkEMbKFCFa7g=" 
              onClick={(e) => setOpen(true)}
              />
              <Typography variant='span'>Olivia</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar