import React from 'react';
import { styled, useTheme,alpha } from '@mui/material/styles';
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
import { Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChartDashboard from './ChartDashboard';
import HomeIcon from '@mui/icons-material/Home';

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

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

    const navigate=useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'darkcyan' }}>
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

      <Grid container spacing={3}>
  {/* Statistics Card 1 */}
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ marginLeft: '8px', marginTop:'100px',backgroundColor:'lightsteelblue'}}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Total Users
        </Typography>
        <Typography variant="h4">389</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Statistics Card 2 */}
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ marginLeft: '8px', marginTop:'100px',backgroundColor:'darksalmon'}}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Bookings
        </Typography>
        <Typography variant="h4">815</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Statistics Card 3 */}
  <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ marginLeft: '8px', marginTop:'100px',backgroundColor:'lightseagreen' }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Visitors
        </Typography>
        <Typography variant="h4">1939</Typography>
      </CardContent>
    </Card>
  </Grid>

{/* Statistics Card 4 */}
<Grid item xs={12} sm={6} md={3}>
    <Card sx={{ marginLeft: '8px', marginTop:'100px',marginRight:'8px',backgroundColor:'lightslategrey' }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Total Profit
        </Typography>
        <Typography variant="h4">10,100</Typography>
      </CardContent>
    </Card>
  </Grid>
  </Grid>
    </Box>
    {/* Charts */}
       <ChartDashboard />
    </>
  );
}
