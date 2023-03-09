import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import '../CSS/CustomerCard .css';
const CustomerCard = ({  imgPath, description, name, profession, icon }) => {
  return (
    <Card className='card_content' sx={{ maxWidth: 250, marginRight:4 }}>
      <CardHeader
    
        avatar={<img src={imgPath} alt="avatar" />}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {profession}
        </Typography>
        {icon}
      </CardContent>
    </Card>
  );
};

CustomerCard.propTypes = {
  label: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default CustomerCard;
