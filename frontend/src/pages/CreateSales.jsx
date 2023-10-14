import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateSale = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [productModelNumber, setProductModelNumber] = useState('');
  const [quantity, setQuantity] = useState();
  const [soldPrice, setSoldPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveSale = () => {
    const data = {
      customerName,
      phoneNumber,
      company,
      address,
      district,
      productModelNumber,
      soldPrice,
      quantity,
    };
  
    console.log('Request Data:', data); // Log the data being sent to the server
  
    setLoading(true);
    axios
      .post('http://localhost:5555/sales', data)
      .then((response) => {
        console.log('Response Data:', response.data); // Log the response from the server
        setLoading(false);
        enqueueSnackbar('Sale Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happened. Please check the console', {
          variant: 'error',
        });
        console.log('Error:', error); // Log any error information
      });
  };
  

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Sale</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Customer Name</label>
          <input
            type='text'
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Phone Number</label>
          <input
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Company</label>
          <input
            type='text'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Address</label>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>District</label>
          <input
            type='text'
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Product Model Number</label>
          <input
            type='text'
            value={productModelNumber}
            onChange={(e) => setProductModelNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Quantity</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Sold Price</label>
          <input
            type='number'
            value={soldPrice}
            onChange={(e) => setSoldPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSale}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateSale;
