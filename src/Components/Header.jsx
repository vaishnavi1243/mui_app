
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import envato from '../images/envato-market-light_logo.png' 
import '../CSS/Header.css'
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className='header'>
      <div><img src={envato} /></div>
        
        <div>
          
          
          <Button color="inherit">Buy Now</Button>
       </div>
        </div>
    </Box>
  );
}