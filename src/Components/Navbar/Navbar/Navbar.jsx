import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../../assets/Navbar/ykfreightway.jpg';

const pages = ['HOME', ' SERVICES', 'ABOUT US', 'LOCATION', 'CONTACT US '];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        padding: '.5rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="YK Freightway Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 80,
            }}
          />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: '1rem',
                      '&:hover': { color: 'red' },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          {/* <Box
            component="img"
            src={Logo}
            alt="YK Freightway Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              height: 60,
              flexGrow: 1,
            }}
          /> */}
          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  color: 'black',
                  display: 'block',
                  fontSize: '0.9rem',
                  padding: '0.5rem 1rem',
                  position: 'relative',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'red',
                    backgroundColor: 'transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2.7px',
                    bottom: '4px', 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'red',
                    transition: 'width 0.4s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '70%',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;