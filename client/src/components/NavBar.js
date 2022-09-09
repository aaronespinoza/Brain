import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const NavBar = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="neutral" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="custom"
            aria-label="menu"
            
            
            sx={{ mr: 2  }}
          >
            <HomeRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2  }}
          >
            <QuestionMarkRoundedIcon />
          </IconButton>
          <Typography textAlign="center" variant="h6" component="div" 
           sx={{ flexGrow: 1 }}>
            Episodes
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2  }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
            <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2  }}
          >
            <PermIdentityOutlinedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2  }}
          >
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;