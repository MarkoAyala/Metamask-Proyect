import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CV from '../../Assets/CvImage.jpeg';
import AdbIcon from '@mui/icons-material/Adb';
import MenuDrawer from './Menu';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

// Drawer // 
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
// ============== //


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CryptoSearch
          </Typography>

          <Box sx={{display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <MenuDrawer state={state} toggleDrawer={toggleDrawer}/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 0,
              display: { xs: 'inline-block', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign:"end"
            }}
          >
            CryptoSearch
          </Typography>

          <Box sx={{ flexGrow: 0 , display:{xs:"none" , md:"flex"} }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                margin:"0 18px 0 0"
            }}>
            <Typography variant="span" component="a" sx={{background:"none" , border:"none", color:"lightgray", cursor:"pointer", textDecoration:"none"}} href="https://portfolio-marko-ayala.vercel.app/" target="_blank">
                Marko Ayala
            </Typography>
            <Typography variant="span" component="a" sx={{background:"none" , border:"none", color:"lightgray", cursor:"pointer", textDecoration:"none"}} href="https://portfolio-marko-ayala.vercel.app/" target="_blank">
                Full-Stack Developer
            </Typography>
            </Box>
              <IconButton target="_blank" href="https://portfolio-marko-ayala.vercel.app/" sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={CV} sx={{ width: 56, height: 56 }} />
              </IconButton>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;