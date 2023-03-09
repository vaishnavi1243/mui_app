import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import '../CSS/Footer.css'

const Footer=()=>
{
    return (
    <>
    <div className="footer">
        <div className='aboutus'>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing.</p>
            <div>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>
 
            </div>
         </div>
     <div className='Company'>
        <div className='company_heading'>
        <h4>Company</h4>
        </div>
        <div className='company_details_list'>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
            <div>About Us</div>
        </div>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
            <div>Services</div>
        </div>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
            <div>Team</div>
        </div>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
           <div>Price</div>
        </div>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
            <div>Project</div>
        </div>
        </div>
     </div>
     <div className="Company">
     <div className='company_heading'>
        <h4>Useful Liks</h4>
        </div>
        <div className='company_details_list'>
        <div className='company_details'>
        <span><KeyboardArrowRightIcon/></span>
           <div>Terms of Services</div>
        </div>
        <div className='company_details'>
           <span>< KeyboardArrowRightIcon/></span>
            <div>Privacy Polacy</div>
        </div>
        <div className='company_details'>
            <span><KeyboardArrowRightIcon/></span>
           <div>Documentation</div>
        </div>
        <div className='company_details'> 
           <span>< KeyboardArrowRightIcon/></span>
           <div>Changelog</div>
        </div>
        <div className='company_details'>
           <span>< KeyboardArrowRightIcon/></span>
            <div>components</div>
        </div>
        </div>
     </div>
     <div className='Newsletter'>
        <div>
        <h4>New sletter</h4>
        <p>Sign up for the latets news</p>
        </div>
        <div className='mail_search'>
        <div className='mail_search_icon'> <MailIcon/></div>
        <input ></input>
        </div>
        <div className='subscribe'>
        <Button variant="contained">subscribe</Button>
        </div>
     </div>
    </div>
    </>
    )
}
export default Footer;