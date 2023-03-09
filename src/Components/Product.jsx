import * as React from 'react';
import mobilethree from '../images/mobile-3.svg'
import ProductAnalytics from '../Common.js/ProductAnalytics';
import Content from '../Common.js/Content';
import '../CSS/Product.css';

export default function Product() {
  return (
    <>
    
    <div className='product_container'>
      <div className='product_container_left'>
            <img src={mobilethree} alt="mobilethree"/>
         </div>   
    <div className='product_container_right'>
    <div>
    <Content heading="Great Product Analytics" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."/>
  
     <ProductAnalytics/>
     </div>
    </div> 
    </div>   
    </>
  );
}
