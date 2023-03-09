import '../CSS/Download.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
const DownloadPage =()=>
{
    return (<>
    <div className='download_now'>
    <div className="download">
    <h1 className="download_heading">Download Now</h1>
    <p className="download_content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
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
    </>)
}
export default DownloadPage;