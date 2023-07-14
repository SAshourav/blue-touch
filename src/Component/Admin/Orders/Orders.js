import React from 'react';
import ordersAnime from '../../../Images/orders.json';
import next from '../../../Images/next.json';
import Lottie from 'lottie-react';
import AllOrders from './AllOrder/AllOrders';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/admin/ongoing`);
    };
  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-bold text-3xl mt-10 mb-5'>Ongoing Orders</h2>
      <div className='flex justify-center items-center mt-4'>
        <Lottie className='w-96' animationData={ordersAnime} />
        <AllOrders />
        <Lottie onClick={handleClick} className='w-64 cursor-pointer' animationData={next} />
      </div>
    </div>
  );
};

export default Orders;
