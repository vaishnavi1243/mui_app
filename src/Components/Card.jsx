import * as React from 'react';
import Box from '@mui/material/Box';
import CardUpper from '../Common.js/CardUpper';
import List from '../Common.js/List';

import Button from '@mui/material/Button';

export default function Card(props) {
  return (
    <div style={{ width: '20%' ,margin: '2rem' }}>
      <Box
        sx={{
          display: 'grid',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'white',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
         
          width:'95%'
        }}
      >
      
        <CardUpper img={props.img} heading={props.heading} para_one={props.para_one} para_two={props.para_two} highlight={props.highlight}/>
    
        <List />
        <div id="buy_now_btn">     
        <Button variant="contained">Buy now</Button>
      </div>
      </Box>
      
 
    </div>
  );
}