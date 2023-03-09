// import * as React from 'react';
// import '../CSS/mainpage_bottom.css'
// import mobiletwo from '../images/mobile-2.svg' 
// import ImageListGrid from './ImageListGrid';
// import Content from '../Common.js/Content';
// export default function Mainpage_bottom() {
//   return (
//     <>
//     <div className='mainpage_container_two'>

   
//     <div className='mainpage_container_two_left'>
//       <div>
//             <Content heading="App Features" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"/>
//             <div className='imagelist'>
//             <ImageListGrid/>
//             </div>
//             </div>
//     </div>  
//     <div className='mainpage_container_two_right'>
//           <img src={mobiletwo} alt="mobile"/>
//      </div>
//      </div>
//      </>
//   );
// }
import '../CSS/mainpage_bottom.css';
import Content from '../Common.js/Content';
import ImageListGrid from './ImageListGrid';
import mobiletwo from '../images/mobile-2.svg' 
export default function Mainpage_bottom() {
    return (
       <>
        <div className='mainpage_container_two'>
        <div className='mainpage_container_two_left'>
          <div>
        <Content heading="App Features" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"/>
        </div>
        
        <ImageListGrid/>
        
          </div>
        <div className='mainpage_container_two_right'>
        <img src={mobiletwo} alt="mobile"/>
          </div>
        </div>
       </>
    )
}