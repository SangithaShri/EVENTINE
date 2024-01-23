import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const cardData = [
  {
    id: 1,
     imgUrl: 'https://www.mgnevents.co.uk/wp-content/uploads/2019/06/18th-Black-White-Birthday-Party-Kent-031.jpg',
     title: 'LE MOSS - 2024 NYE',
     address: 'Le Meridien, Udayampalayam, Coimbatore, Tamil Nadu 641028, India',
     date: '31 Dec 2023 to 01 Jan 2024',
     category: 'New year parties',
  },
  {
    id:2,
      imgUrl: 'https://i.pinimg.com/originals/f2/07/cf/f207cf18983a1d92bd08f4e154ecdbf6.jpg',
      title: 'MASQUERADE BALL',
      address: '2/2, Avinashi Rd, Opp CIT, Peelamedu, Coimbatore, Tamil Nadu 641014, India',
      date: '31 Dec 2023',
      category: 'New year parties',
   },
   {
    id:3,
      imgUrl: 'https://rochester.kidsoutandabout.com/sites/default/files/27_8.jpg',
      title: 'KIDS SPORTS FESTIVAL 2K24',
      address: 'Nehru Stadium, ATT Colony, Gopalapuram, Coimbatore, Tamil Nadu 641018, India',
      date: '25 Jan 2024',
      category: 'Marathon',
   },
   {
    id:4,
      imgUrl: 'https://th.bing.com/th/id/R.1585d4b82d354004090f776763ac33e6?rik=UnWPo29HCuvVqw&riu=http%3a%2f%2fwww.disneytouristblog.com%2fwp-content%2fuploads%2f2015%2f12%2fwalt-disney-world-christmas-pictures-034.jpg&ehk=h1UY89moBKrNXXXEIhtQvW1zeC2IKIyOwTPVtnLP4FM%3d&risl=&pid=ImgRaw&r=0',
      title: 'Christmas Carol',
      address: 'Prozon Mall, Coimbatore, Tamil Nadu 641018, India',
      date: '25 Dec 2023',
      category: 'Events',
   },
   {
    id:5,
      imgUrl: 'https://static.chethams.com/app/uploads/sites/4/2023/05/s7ax2147r1fhu5i3020230516104913.jpg',
      title: 'Motta Maadi Music',
      address: 'Hindustan Arts&Science, Coimbatore, Tamil Nadu 641018, India',
      date: '29 Dec 2023',
      category: 'Music Show',
   },
 ];

export default function FrontPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const navigate=useNavigate();

  const handleDetailsClick = (cardId) => {
    navigate(`/${cardId}`);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (<>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
           
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/FrontPage")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <HomeIcon />
                </ListItemIcon>
                
                <ListItemText primary="FrontPage" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Dashboard")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <DashboardIcon />
                </ListItemIcon>
                
                <ListItemText primary="DashBoard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/Addevent")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <AddCircleIcon />
                </ListItemIcon>

                <ListItemText primary="Add Event" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <LogoutIcon />
                </ListItemIcon>
                
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>
          <h1 style={{color:'gray'}}>Ongoing Events</h1>
        </Typography>
        <Grid container spacing={1}>
  {cardData.map((data) => (
    <Grid item xs={12} sm={6} md={4} key={data.id}>
      <Card key={data.id} sx={{ maxWidth: 350, marginLeft: '40px', marginBottom: '10px' }}>
        <CardMedia component="img" alt="new year party" height="140" image={data.imgUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.category}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={() => handleDetailsClick(data.id)}>Details</Button>
          {/* <Link to='/Details'><Button size="small">Book Tickets</Button></Link> */}
        </CardActions>
      </Card>
      </Grid>
    ))}
    
    </Grid>
      </Box>
    </Box>
    </>
  );
}