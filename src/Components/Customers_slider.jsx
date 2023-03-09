import CustomerCard from '../Common.js/CustomerCard';
import Customer_list from '../Constants/Customers_list';
import '../CSS/Customer_slider.css'
const Customers_slider = () => {
  return (
    
    <div className='slider_container'>
       <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
      }}
    ></div>
      {Customer_list.map((customer, index) => (
        <CustomerCard
          key={index}
         
          imgPath={customer.imgPath}
          description={customer.description}
          name={customer.name}
          profession={customer.profession}
          icon={customer.icon}
        />
      ))}
    </div>
  );
};

export default Customers_slider;
