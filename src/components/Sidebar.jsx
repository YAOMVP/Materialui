import { Article, Checklist,  EmojiPeople,  Home, ModeNight, Sports, SportsEsports, WebAsset, } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


const Sidebar = ({mode,setMode}) => {
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{display:{xs:"none",sm:"block"}}}
    >
    <Box position="fixed">
      <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="HomePage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://oliviablogs.herokuapp.com/">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Personal Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://todolistolivia.herokuapp.com/">
                <ListItemIcon>
                  <Checklist  />
                </ListItemIcon>
                <ListItemText primary="To-Do List" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://yaomvp.github.io/breakoutgameolivia/">
                <ListItemIcon>
                  <SportsEsports  />
                </ListItemIcon>
                <ListItemText primary="BreakOut Game" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://snakegameolivia.herokuapp.com/">
                <ListItemIcon>
                  <Sports  />
                </ListItemIcon>
                <ListItemText primary="Snake Game" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://yaomvp.github.io/breakoutgameolivia/">
                <ListItemIcon>
                  <EmojiPeople  />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="https://yaomvp.github.io/breakoutgameolivia/">
                <ListItemIcon>
                  <WebAsset  />
                </ListItemIcon>
                <ListItemText primary="Website" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <ModeNight  />
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
  </Box>
  )
}

export default Sidebar