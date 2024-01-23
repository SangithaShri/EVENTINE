import * as React from 'react';
import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
// import Events from '.components/Events';

export default function Signup() {
  const paperStyle={padding:'30px 20px',width:350, margin:"50px auto"}
  const avatarStyle={backgroundColor:'darkcyan'}
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center' >
        <Avatar style={avatarStyle}><LockIcon /></Avatar>
        <h2>Sign Up</h2>
        </Grid>

        <TextField
          required
          id="outlined-required"
          label="UserName"
          fullWidth
          sx={{ m: 0, width: '100%', marginTop:'10px' }}
        />

        <FormControl sx={{ m: 0, width: '100%', paddingTop:'10px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'10px' }}>Email</InputLabel>
          <OutlinedInput label="Email"
          />
        </FormControl>

        <FormControl sx={{ m: 0, width: '100%', paddingTop:'10px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'10px' }}>Phone Number</InputLabel>
          <OutlinedInput label="Phone Number"
          />
        </FormControl>

<FormControl sx={{ m: 0, width: '100%', paddingTop:'10px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'10px' }}>Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 0, width: '100%', paddingTop:'10px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'10px' }}>Confirm Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <label>I agree to Terms and Services</label>

    <Link to='/Events'>
    <Button type='submit' sx={{ m: 0, paddingTop:'10px',backgroundColor:'darkcyan', color:'black' }} 
    fullWidth>Sign Up</Button></Link>

    <Typography sx={{ m: 0, paddingTop:'10px'}}>Already have an account?
      <Link to='/Signin'>Login</Link>
    </Typography>

      </Paper>
    </Grid>
  );
}