import Content from "../Common.js/Content";
import Card from "./Card";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

import '../CSS/Services.css'
const Services=()=>

{
    return(<>
    <div className="services">
        <h1 className="services_heading">Our Services</h1>
        <p className="services_content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        </p>
        </div>
    <div className="card_conatiner">
        <Card img={img1} heading="Free" para_one="$" para_two="/mo" highlight="0" />
        <Card img={img2} heading="Starter" para_one="$" para_two="/mo" highlight="19" />
        <Card img={img3} heading="Business" para_one="$" para_two="/mo" highlight="39"/>
        <Card img={img4} heading="Ultimate" para_one="$" para_two="/mo" highlight=" 59"/>
    </div>
</>)
}
export default Services ;