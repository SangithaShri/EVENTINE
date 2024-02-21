import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'gray', textAlign: 'left',marginTop:'50px' }}>
  <Typography variant="h2" sx={{ color: 'white', fontSize: '23px', fontFamily:'monospace' }}>
    Contact Us
  </Typography>
  <Typography variant="h2" sx={{ color: 'white', fontSize: '17px',fontFamily:'monospace',padding:'3px' }}>
    Email: eventine@gmail.com<br></br>
    Contact: +91 9436238236
  </Typography>
  <Typography variant="h2" sx={{ color: 'white', fontSize: '17px',fontFamily:'monospace',padding:'3px' }}>
    Follow us on: 
    <InstagramIcon />
    <TwitterIcon />
    <YouTubeIcon />
    <LinkedInIcon/>
  </Typography>
  <Typography variant="h2" sx={{ color: 'white', fontSize: '17px',fontFamily:'monospace',padding:'3px' }}>
    Privacy Policy | Terms Of Service | Payment Safety | Data Safety
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ color: 'white', fontSize: '20px', fontFamily:'sans-serif',marginLeft:'500px' }}>
    © 2023 EVENTINE. All rights reserved.
  </Typography>
</Box>
</>
  )
}

export default Footer
