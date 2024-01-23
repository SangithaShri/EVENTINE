import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import Grid from '@mui/material/Grid';
import Footer from './Footer';
import EventNavbar from './EventNavbar';

function Events() {

  const navigate = useNavigate();

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

       const handleDetailsClick = (cardId) => {
        navigate(`/${cardId}`);
      };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

    const pages = ['Location'];

  return (<>
  {/* Header */ }
    <EventNavbar />
{/* Event Display */ }
    <Typography gutterBottom variant="h5" component="div" style={{ color:'darkcyan',paddingTop:'46px', marginLeft:'30px',paddingBottom:'7px', fontFamily:'monospace' }}>
        EVENTS NEAR YOU
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
    
    {/* Footer */ }
<Footer />
</>
  );
}

export default Events;