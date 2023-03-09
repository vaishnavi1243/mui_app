// import * as React from 'react';
// import Imagelist from '../Constants/Imagelist';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ImageListGrid() {
//   return (
//     <div className='imagelist'>
//       {Imagelist.map((image) => (
//         <Card key={image.title} sx={{ maxWidth: 300 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
             
//               image={image.img.default}
//               alt={image.title}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {image.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {image.description}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import Imagelist from '../Constants/Imagelist.jsx';
// import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:624,
  },
  card: {
    maxWidth: 335,
    boxShadow: 'none',
    border:'none',
  },
  media: {
    
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
}));

export default function ImageListGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Imagelist.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardMedia 
                className={classes.media}
                image={image.img}
                title={image.title}

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h4" textAlign="left">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" textAlign="left" width="200px" >
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
