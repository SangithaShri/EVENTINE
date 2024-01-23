import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import { Edit, Mail, Phone, LocationOn, Link as LinkIcon} from '@mui/icons-material';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import { Link , useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './homepage.css';
import logo from '../components/logo.png';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';

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

const ProfilePage = () => {

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEvent = () => {
      navigate('/Events');
    };

    const handleLogout = () => {
      navigate('/');
    };

    const pages = ['Location'];

  return (<>

    <Box>
<AppBar component={'nav'} sx={{bgcolor:"white"}}>
            <Toolbar>

<img src={logo} alt='alt' style={{ width:'150px',height:'50px'}} />
           
            <LocationOnIcon sx={{ display: { xs: 'none', md: 'flex',color:'black', align:'left' }, mr: 1 }} />

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
            <li>
            <Link to='/'>Bookings</Link>
              </li>
              </ul>
          </Box>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{color:'black'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleEvent}>Events</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
            </Toolbar>
        </AppBar>
       <Toolbar/>
    </Box>

    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item>
        <Card sx={{ width: 600 }}>
          {/* Profile Header */}
          <CardContent>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                <Avatar alt="User Avatar" src="https://placekitten.com/200/200" sx={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Typography variant="h5" component="div"sx={{paddingLeft:'20px'}}>
                  Clara Nathel
                </Typography>
                <Link to={'/Editing'}><Button variant="outlined" color="primary" startIcon={<Edit />} sx={{paddingLeft:'20px'}}>
                  Edit Profile
                </Button>
                </Link>
              </Grid>
            </Grid>
          </CardContent>

          {/* Profile Details */}
          <Divider />
          <CardContent>
            <List>
              {/* Email */}
              <ListItem>
                <ListItemAvatar>
                    <Mail />
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary="claranathel@gmail.com" />
                </ListItem>

              {/* Phone Number */}
              <ListItem>
                <ListItemAvatar>
                    <Phone />
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary="+91 8923475746" />
                </ListItem>

              {/* Location */}
              <ListItem>
                <ListItemAvatar>
                    <LocationOn />
                  </ListItemAvatar>
                  <ListItemText primary="Location" secondary="India" />
                </ListItem>

            </List>
          </CardContent>

          {/* Additional Information */}
          <Divider />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hi I'm Clara Nathel. I had a great time exploring each and every event and picking the best event that suits me.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default ProfilePage;
