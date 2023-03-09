import '../CSS/Topcontainer.css'
import mobile from '../images/mobile-1.svg';
import Content from '../Common.js/Content';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
const Topcontainer=()=>
{
    return  (<>
    <div className="Topcontainer">
    <div className='Topcontainer_left'>
    <img src={mobile} alt="mobile"/>
    </div>
    <div className='Topcontainer_right'>
        <div className='title'>
          <p className='Topcontainer_right_title'>Evalynn Music</p>
          <Content heading="Best Music App 2020" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"/>
          <Button id="Topcontainer_right_btn" variant="outlined">CLICK TO WATCH A VIDEO</Button>
        </div>
        <div className='buttons'>
                 
           <Stack direction="row" spacing={2}>
            <Button  variant="contained" startIcon={<AndroidIcon/>}>
                                Play Store 
            </Button>
            <Button variant="contained" startIcon={<AppleIcon/>}>
                             App Store
            </Button>
          </Stack>
     
        </div>
    </div>
    </div>
    </>)
    
}
export default Topcontainer;