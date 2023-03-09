// import mobile from '../images/mobile-1.svg'
// import '../CSS/Mainpage.css';
// import Product from './Product';
// import Button from '@mui/material/Button';
// import AppleIcon from '@mui/icons-material/Apple';
// import AndroidIcon from '@mui/icons-material/Android';
// import Content from '../Common.js/Content';
// import Stack from '@mui/material/Stack';
// import Mainpage_bottom from './Mainpage_bottom';
// import Containermusic from './Containermusic';
// import Services from './Services';
// import DownloadPage from './Download';
//  const Mainpage=()=>
// {
//     return (<>
//     <div className='mainpage'>
//         <div className='mainpage_top'>
//         <div className='mainpage-left'>
//             <img src={mobile} alt="mobile"/>
//         </div>
//         <div className='mainpage-right'>
//             <div className='maiinpage_right_top'>
//            <p className='mainpage_title'>Evalynn Music</p>
//            <Content heading="Best Music App 2020" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"/>
//            <Button id="btn" variant="outlined">CLICK TO WATCH A VIDEO</Button>
//            </div>
//            <div className='buttons'>          
//              <Stack direction="row" spacing={2}>
//            <Button  variant="contained" startIcon={<AppleIcon/>}>
//  Play Store
// </Button>
// <Button variant="contained" startIcon={<AndroidIcon/>}>
//  App Store
// </Button>
// </Stack>
// </div>



//         </div>
//         </div>
//         <div className='mainpage_bottom'> 
//         <Mainpage_bottom/>
//         </div>
//         <div className='productpage'>
//         <Product/>
//         </div>
//         <div className='music'>
//         <Containermusic/>
//         </div>
//         <div className='services'>
//             <Services/>
//         </div>
//         <div>
//         <DownloadPage/>
//         </div>
//     </div>
//     </>)
    
// }
// export default Mainpage;
import Topcontainer from "./Topcontainer";
import Mainpage_bottom from './Mainpage_bottom';
import Product from './Product';
import Containermusic from './Containermusic';
import Services from './Services';
import Customers_slider from "./Customers_slider";
import DownloadPage from './Download';
const Mainpage=()=>
 {
     return (<>
     <div className='mainpage'>
        <Topcontainer/>
        <Mainpage_bottom/>
        <Product/>
        <Containermusic/>
        <Services/>
        <Customers_slider/>
        <DownloadPage/>
     </div>
        </>
     )
 }
 export default Mainpage;