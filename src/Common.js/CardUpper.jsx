import Divider from '@mui/material/Divider';
import '../CSS/CardUpper.css'
const CardUpper=(props)=>
{
    return (<>
       <div className='card_upper'>
       <div>
        <img src={props.img} />
       </div>
       <div className='details'>
        <h3>{props.heading}</h3>
        <div className='sub_details'>
        <p>{props.para_one}</p>
        <h6>{props.highlight}</h6>
        <p>{props.para_two}</p>
        </div>
       </div>
       </div>
       <Divider/>
</>)
}
export default CardUpper;