import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
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

const Eve2 = () => {
  const [open, setOpen] = useState(false);
  const [singleQuantity, setSingleQuantity] = useState(0);
  const [familyQuantity, setFamilyQuantity] = useState(0);
  const [coupleQuantity, setCoupleQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleIncrement = (type, price) => {
    if (type === 'single') {
      setSingleQuantity(singleQuantity + 1);
    } else if (type === 'family') {
      setFamilyQuantity(familyQuantity + 1);
    } else if (type === 'couple') {
      setCoupleQuantity(coupleQuantity + 1);
    }
    setTotalPrice(totalPrice + price);
  };

  const handleDecrement = (type, price) => {
    if (type === 'single' && singleQuantity > 0) {
      setSingleQuantity(singleQuantity - 1);
      setTotalPrice(totalPrice - price);
    } else if (type === 'family' && familyQuantity > 0) {
      setFamilyQuantity(familyQuantity - 1);
      setTotalPrice(totalPrice - price);
    } else if (type === 'couple' && coupleQuantity > 0) {
      setCoupleQuantity(coupleQuantity - 1);
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
    <img src="https://i.pinimg.com/originals/f2/07/cf/f207cf18983a1d92bd08f4e154ecdbf6.jpg" alt="Party Image" width="250" height="250" />
</div>
<React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '98vh',marginTop:'50px',borderRadius:'35px' }}>
        <div style={{ textAlign: 'center',paddingTop:'5px' }}>
          <h1>MASQUERADE BALL</h1>
          <h3>Description</h3>
          <p>Join the lavish ball for unlimited entertainment, lavish buffet, fireworks display, musical events, dance floor and so on.</p>
          <p><LocationOnIcon />2/2, Avinashi Rd, Opp CIT, Peelamedu, Coimbatore, Tamil Nadu 641014, India</p>
        <p><DateRangeIcon />31 Dec 2023</p>
        <p><CallIcon />+91 9453725482</p>
        <p><h3>DETAILS</h3></p>
        <p>DOORS OPEN : 6PM ONWARDS<br></br>
           EVENT STARTS AT 7:00 PM<br></br>
           DURATION : 7-8 HOURS<br></br>
           DRESS CODE: MASK MANDATORY</p>

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
            <h3>Single</h3>
            <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
              <Typography>
                Single Person
              </Typography>
              <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
                ₹ 1500 INR
              </Typography>
              </div>
              <span sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => handleDecrement('single',1500)}
          style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', fontSize: '15px', '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        >
          -
        </Button>
        <span style={{ margin: '8px', fontSize: '18px' }}>{singleQuantity}</span>
        <Button
          onClick={() => handleIncrement('single',1500)}
          style={{ backgroundColor: 'black', color: 'white', borderRadius: '100%', fontSize: '15px','&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        >
          +
        </Button>
      </span>
              </CardContent>
            </Card>
          </Grid>

  {/* Couple section */}
  <Grid item xs={12}>
  <h3>Couple</h3>
  <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Typography>
          Couple (2 persons)
        </Typography>
        <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
          ₹ 2500 INR
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button 
          onClick={() => handleDecrement('couple',2500)}
          style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', fontSize: '15px','&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }}
        > 
        - 
        </Button>
        <span style={{ margin: '8px', fontSize: '18px' }}>{coupleQuantity}</span>
        <Button
          onClick={() => handleIncrement('couple',2500)}
          style={{ backgroundColor: 'black', color: 'white', borderRadius: '100%', fontSize: '15px', '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
          }, }} >
          +
        </Button>
      </div>
    </CardContent>
  </Card>
</Grid>

{/* Family section */}
<Grid item xs={12}>
            <h3>Family</h3>
            <Card sx={{ maxWidth: 600, maxHeight: 100 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
            <Typography>
              Family (3 persons)
            </Typography>
            <Typography sx={{ fontSize: 'block', fontWeight: 'bold', margin: '8px 0' }}>
              ₹ 3500 INR
            </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
  onClick={() => handleDecrement('family',3500)}
  style={{ backgroundColor: 'grey', color: 'white', borderRadius:'100%', fontSize: '15px', '&:hover': {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  }, }}
>
  -
</Button>
  <span style={{ margin: '8px', fontSize: '18px' }}>{familyQuantity}</span>
<Button
  onClick={() => handleIncrement('family',3500)}
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

export default Eve2