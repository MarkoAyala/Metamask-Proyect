import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CV from "../../Assets/CvImage.jpeg";
import { Avatar, Typography } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MenuDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: 250 , display:"flex", flexDirection:"column", justifyContent:"space-around", height:"100%"}}
      role="presentation"
      /* onClick={toggleDrawer(anchor, false)} */
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin:"-15px 0 20px 0"
        }}
      >
        <Avatar alt="Remy Sharp" src={CV} sx={{ width: 150, height: 150 }} />
        <Box sx={{textAlign:"center", margin:"30px 5px 0px 0px"}}>
            <Typography component="h6" sx={{color:"gray"}}>
                Marko Ayala
            </Typography>
            <Typography component="h6" sx={{color:"gray"}}>
                FullStack Developer
            </Typography>
            <Typography component="a" variant="h6" href="https://portfolio-marko-ayala.vercel.app/" target="_blank" sx={{color:"black", fontSize:"15px"}}>
                Sobre mi
            </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
   
          <ListItem key={"ahre"} disablePadding>
            <ListItemButton target="_blank" href="https://github.com/MarkoAyala">
              <ListItemIcon>
                <GitHubIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={"GitHub"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"ahre2"} disablePadding>
            <ListItemButton target="_blank" href="https://www.linkedin.com/in/markoayaladev/">
              <ListItemIcon> 
                <LinkedInIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary={"LinkedIn"} />
            </ListItemButton>
          </ListItem>
          
   
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
