import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './homepage.css';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CallIcon from '@mui/icons-material/Call';
import logo from '../components/logo.png'
import {
  Grid,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
} from '@mui/material';

const Eve5 = () => {

  const [open, setOpen] = useState(false);
  const [goldQuantity, setGoldQuantity] = useState(0);
  const [fanpitQuantity, setFanpitQuantity] = useState(0);
  const [platinumQuantity, setPlatinumQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (type, price) => {
    if (type === 'gold') {
      setGoldQuantity(goldQuantity + 1);
    } else if (type === 'fanpit') {
      setFanpitQuantity(fanpitQuantity + 1);
    } else if (type === 'platinum') {
      setPlatinumQuantity(platinumQuantity + 1);
    }
    setTotalPrice(totalPrice + price);
  };

  const handleDecrement = (type, price) => {
    if (type === 'gold' && goldQuantity > 0) {
      setGoldQuantity(goldQuantity - 1);
      setTotalPrice(totalPrice - price);
    } else if (type === 'fanpit' && fanpitQuantity > 0) {
      setFanpitQuantity(fanpitQuantity - 1);
      setTotalPrice(totalPrice - price);
    } else if (type === 'platinum' && platinumQuantity > 0) {
      setPlatinumQuantity(platinumQuantity - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
      const handleCloseNavMenu = () => {
          setAnchorElNav(null);
      };
  
      const handleCloseUserMenu = () => {
          setAnchorElUser(null);
        };
  
      const pages = ['Location'];

  return (
    <>
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

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <ul className='events'>
            <li>
            <Link to='/'>Bookings</Link>
              </li>
              </ul>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <ul className='events'>
            <li>
            <Link to='/'>Logout</Link>
              </li>
              </ul>
          </Box>
            </Toolbar>
        </AppBar>
       <Toolbar/>
    </Box>

    <div className="eve1">
    <img src="https://static.chethams.com/app/uploads/sites/4/2023/05/s7ax2147r1fhu5i3020230516104913.jpg" alt="Party Image" width="250" height="250" />
</div>
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',marginTop:'50px',borderRadius:'35px' }}>
        <div style={{ textAlign: 'center',paddingTop:'5px' }}>
          <h1>Motta Maadi Music</h1>
          <h3>Description</h3>
          <p>Get ready to blast your music taste with the one and only Motta Maadi Music concert show on live. Grab the tickets and enjoy the funfiled entertainment with your friends.</p>
          <p><LocationOnIcon />Hindustan Arts&Science, Coimbatore, Tamil Nadu 641018, India</p>
        <p><DateRangeIcon />29 Dec 2023</p>
        <p><CallIcon />+91 8625638662</p>
        <p><h3>DETAILS</h3></p>
        <p>DOORS OPEN : 6PM ONWARDS<br></br>
           EVENT STARTS AT 7:00 PM<br></br>
           DURATION : 3 - 4 HOURS<br></br>
           NOT ALLOWED: Outside snacks and Alcohol
           </p>

           <div className='signs'>
<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
              <Button variant="contained" onClick={handleClickOpen} sx={{ margin:'auto', backgroundColor:'bisque', color:'black' }}>Book Now</Button>
          </Box>
</div>

{/* Pricing Section */}
<Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose Pricing</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>Gold</h3>
            <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
              <Typography>
                Gold Early Bird Stage-1
              </Typography>
              <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
                ₹ 750 INR
              </Typography>
              </div>
              <span sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => handleDecrement('gold',750)}
          style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', fontSize: '15px', '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        >
          -
        </Button>
        <span style={{ margin: '8px', fontSize: '18px' }}>{goldQuantity}</span>
        <Button
          onClick={() => handleIncrement('gold',750)}
          style={{ backgroundColor: 'black', color: 'white', borderRadius: '100%', fontSize: '15px','&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        >
          +
        </Button>
      </span>
              </CardContent>
            </Card>

            {/* Fanpit section */}
          </Grid>
          <Grid item xs={12}>
            <h3>Fanpit</h3>
            <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
            <Typography>
              Fanpit Early Bird Stage-1
            </Typography>
            <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
              ₹ 1000 INR
            </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
  onClick={() => handleDecrement('fanpit',1000)}
  style={{ backgroundColor: 'grey', color: 'white', borderRadius:'100%', fontSize: '15px', '&:hover': {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  }, }}
>
  -
</Button>
  <span style={{ margin: '8px', fontSize: '18px' }}>{fanpitQuantity}</span>
<Button
  onClick={() => handleIncrement('fanpit',1000)}
  style={{ backgroundColor: 'black', color: 'white', borderRadius:'100%', fontSize: '15px', '&:hover': {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  }, }}
>
  +
</Button>
    </div>
              </CardContent>
            </Card>
          </Grid>

  {/* Platinum section */}
          <Grid item xs={12}>
  <h3>Platinum</h3>
  <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Typography>
          Platinum Early Bird Stage-1
        </Typography>
        <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
          ₹ 1500 INR
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button 
          onClick={() => handleDecrement('platinum',1500)}
          style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', fontSize: '15px','&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        > 
        - 
        </Button>
        <span style={{ margin: '8px', fontSize: '18px' }}>{platinumQuantity}</span>
        <Button
          onClick={() => handleIncrement('platinum',1500)}
          style={{ backgroundColor: 'black', color: 'white', borderRadius: '100%', fontSize: '15px', '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }} >
          +
        </Button>
      </div>
    </CardContent>
  </Card>
</Grid>

        </Grid>
      </DialogContent>

      {/* Checkout section */}
      <DialogActions>
  <Grid container alignItems="center">
    <Grid item xs={6} >
      <Typography variant="h6">Total Price: ₹ {totalPrice || 0} INR</Typography>
    </Grid>
    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={handleClose} sx={{ backgroundColor: 'darkcyan', color: 'black' }}>
        Cancel
      </Button>
      <Button onClick={() => alert('Checkout clicked')} sx={{ backgroundColor: 'darkcyan', color: 'black', marginLeft: '8px' }}>
        Checkout
      </Button>
    </Grid>
  </Grid>
</DialogActions>
</Dialog>

        </div>
        </Box>
      </Container>
    </React.Fragment>
    </>
  )
}

export default Eve5