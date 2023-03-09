import '../CSS/ProductAnalytics.css'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
const  ProductAnalytics=()=>
{
    return (
        <>
       <div className='product_list'>

            <div className='list_content'>
        <div className='check_icon'><CheckIcon/></div>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>
        <div className='list_content'>
        <div className='check_icon'><CheckIcon/></div>
        <div><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p></div>
        </div>
        <div className='list_content'>
        <div className='check_icon'><CheckIcon/></div>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>
        <div className="arrow_btn">
        <Button id="arrow_btn" variant="text" endIcon={<ArrowForwardIosIcon/>}>
                         CLICK TO VIEW MORE
          </Button>
          </div> 
          </div>
       </>

    )
};
export default ProductAnalytics;