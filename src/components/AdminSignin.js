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

export default function AdminSignin() {
  const paperStyle={padding:20,height:'58vh',width:280, margin:"90px auto"}
  const avatarStyle={backgroundColor:'darkcyan'}
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' >
        <Avatar style={avatarStyle}><LockIcon /></Avatar>
        <h2>Admin Sign In</h2>
        </Grid>

        <TextField
          required
          id="outlined-required"
          label="UserName"
          fullWidth
        />

<FormControl sx={{ m: 0, width: '100%', paddingTop:'20px' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required 
          sx={{ m: 0, width: '100%', paddingTop:'20px' }}>Password</InputLabel>
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

        <Checkbox
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={{padding:'15px'}}
    />
    <label>Remember Me?</label>

    <Link to='/FrontPage'>
    <Button type='submit' sx={{ m: 0, paddingTop:'10px',backgroundColor:'darkcyan', color:'black' }} 
    fullWidth> Login </Button></Link>

      </Paper>
    </Grid>
  );
}