import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './homepage.css';
import logo from '../components/logo.png';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Footer from './Footer';

const pages = ['Location'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.black, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
      openchange(true);
    }
    const closepopup=()=>{
      openchange(false);
    }

  return (<>
  {/* Navbar */}
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"white"}}>
        <Toolbar>
          <img src={logo} alt='alt' style={{ width:'150px',height:'50px'}} />
           
          <LocationOnIcon sx={{ display: { xs: 'none', md: 'flex',color:'black', align:'left' }, mr: 1 }} />
          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }} >
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left'}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }}} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 17, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: 'black',fontFamily:'monospace',fontSize: 15 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <ul className='events'>
              <li><Link to="/AdminSignin">Create Event</Link></li>
            <li><Link to={'/Events'}>Events</Link></li>
            <li>
            <Link to='/Signin'>Login</Link>
              </li>
              </ul>
          </Box>
            </Toolbar>
        </AppBar>
       <Toolbar/>
    </Box>
    
<div className="image">
  <div>
<label className='ev'>DISCOVER EVENTS</label>
</div>
<div>
<label className='eve'>Explore the opportunities of socializing</label>
</div>
<div className='signs'>
<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
            <Link to='/Signup'>
              <Button variant="contained" sx={{ margin:'auto', backgroundColor:'bisque', color:'black' }}>Get started for free</Button>
              </Link>
          </Box>
</div>
</div>
<div className='down'>
<h1 style={{fontSize:'50px'}}>
Also, trusted by enterprise customers across the world.
</h1>
<div className='frontimage'>
  <img src='https://cdn.explara.com/public/explara/image/explara-CFA-Institute.png' alt='img' style={{marginRight:'90px', height:'100px', marginLeft:'120px'}} />
  <img src='https://cdn.explara.com/public/explara/image/explara-NASSCOM.png' alt='img' style={{marginRight:'90px', height:'100px'}}/>
  <img src='https://cdn.explara.com/public/explara/image/explara-TiE.png' alt='img' style={{marginRight:'90px', height:'100px'}}/>
  <img src='https://cdn.explara.com/public/explara/image/explara-Singapore-Nursing-Association.png' alt='img' style={{marginRight:'90px', height:'100px'}}/>
  <img src='https://cdn.explara.com/public/explara/image/explara-ASME.png' alt='img' style={{marginRight:'90px', height:'100px'}}/>
</div>
</div>

<Footer />

 </> );
}

export default HomePage;