import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid, Card, CardContent, CardHeader } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Label, Cell } from 'recharts';

export const datas = [
    {
      month:'Jan',
      users: 6,
      bookings: 8,
      visitors: 10,
      profit: 350,
    },
    {
      month:'Feb',
      users: 20,
      bookings: 17,
      visitors: 32,
      profit: 450,
    },
    {
      month:'Mar',
      users: 50,
      bookings: 30,
      visitors: 56,
      profit: 700,
    },
    {
      month:'Apr',
      users: 70,
      bookings: 27,
      visitors: 68,
      profit: 560,
    },
    {
      month:'May',
      users: 86,
      bookings: 30,
      visitors: 100,
      profit: 600,
    },
    {
      month:'Jun',
      users: 100,
      bookings: 50,
      visitors: 138,
      profit: 800,
    },
    {
      month:'July',
      users: 124,
      bookings: 30,
      visitors: 209,
      profit: 650,
    },
    {
      month:'Aug',
      users: 140,
      bookings: 50,
      visitors: 174,
      profit: 500,
    },
    {
      month:'Sep',
      users: 159,
      bookings: 78,
      visitors: 270,
      profit: 670,
    },
    {
      month:'Oct',
      users: 200,
      bookings: 88,
      visitors: 390,
      profit: 820,
    },
    {
      month:'Nov',
      users: 270,
      bookings: 107,
      visitors: 300,
      profit: 1000,
    },
    {
      month:'Dec',
      users: 389,
      bookings: 300,
      visitors: 202,
      profit: 2560,
    },
  ];

const devices = [
    { name: 'Visitors', value: 1939 },
    { name: 'Bookings', value: 815 },
    { name: 'Users', value: 389 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const midRad = -midAngle * RADIAN;
    const x = cx + radius * Math.cos(midRad);
    const y = cy + radius * Math.sin(midRad);
  
    return (
      <g>
        {/* Display percentage */}
        <text x={x} y={y - 10} fill="white" textAnchor="middle" dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      </g>
    );
  };
  
  const Chart = () => {
      return (
        <ResponsiveContainer width="100%" height="90%" >
        <LineChart
          data={datas}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="bump" dataKey="users" stroke="#009933"  />
          <Line type="bump" dataKey="bookings" stroke="#0000ff" />
          <Line type="bump" dataKey="visitors" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
      );
  }
  
  const Piechart = ({ devices }) => {
    return (
      <>
        <ResponsiveContainer width="80%" height="80%">
          <PieChart>
            <Pie
              data={devices}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {devices.map((entry, index) => (<>
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              </>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {devices.map((device, index) => (
            <Box key={`device-${index}`} sx={{ marginX: '10px' }}>
              <Typography variant="body2" color={COLORS[index]} sx={{fontSize:'20px'}}>
                {device.name}
              </Typography>
            </Box>
            ))}
            </Box>
      </>
    );
  };  

const ChartDashboard = () => {
  return (
    <>
    <Box sx={{ display: 'flex', gap: 2 }}>
  {/* Sales portion */}
  <Grid item xs={12} sm={6} md={3} >
    <Card sx={{ paddingLeft: '8px', paddingTop: '15px', paddingRight: '10px', paddingBottom: '10px', marginTop: '50px', marginLeft: '90px', height: '600px',width:'800px' }}>
      <CardHeader title="Sales" sx={{ color: '#00C49F' }}></CardHeader>
      <Chart />
    </Card>
  </Grid>

  {/* Statistics portion */}
  <Grid item xs={12} sm={6} md={3} sx={{ flex: 1 }}>
          <Card sx={{ paddingLeft: '10px', paddingRight: '10px', paddingBottom: '20px', marginTop: '50px', marginLeft: '20px', height: '80%' }}>
            <CardHeader title="Statistics" sx={{ color: '#00C49F' }}></CardHeader>
            <Piechart devices={devices} />
          </Card>
        </Grid>
</Box>
    </>
  )
}

export default ChartDashboard