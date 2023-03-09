import Content from "../Common.js/Content"
import ProductAnalytics from "../Common.js/ProductAnalytics"
import * as React from 'react';
import mobilefour from '../images/mobile-4.svg'
import Button from '@mui/material/Button';
import '../CSS/Containermusic.css'
 const Containermusic=()=>
{
  return(<>
     <div className="Containermusic">
      <div className="Containermusic_left">
        <div>
          <div>
          <Content heading="App Features" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"/>
          </div>
          <div>
            <Button variant="contained">Community</Button>
            <Button variant="contained">Self Service</Button>
            <Button variant="contained">Teamwork</Button>
          </div>
            <ProductAnalytics/>
            </div>
      </div>

      <div className="Containermusic_right">
            <img src={mobilefour} />
      </div>
      </div>
            </>
 )       
  

 
  
}
export default Containermusic;