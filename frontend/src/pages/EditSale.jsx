import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditSale = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [productModelNumber, setProductModelNumber] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [soldPrice, setSoldPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/sales/${id}`)
      .then((response) => {
        setCustomerName(response.data.customerName);
        setPhoneNumber(response.data.phoneNumber);
        setCompany(response.data.company);
        setAddress(response.data.address);
        setDistrict(response.data.district);
        setProductModelNumber(response.data.productModelNumber);
        setQuantity(response.data.quantity);
        setSoldPrice(response.data.soldPrice);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happened. Please check the console', { variant: 'error' });
        console.log(error);
      });
  }, [id]);

  const handleEditSale = () => {
    const data = {
      customerName,
      phoneNumber,
      company,
      address,
      district,
      productModelNumber,
      soldPrice: parseFloat(soldPrice),
      quantity,
    };
    setLoading(true);
    console.log("The data",data)
    axios
      .put(`http://localhost:5555/sales/${id}`, data)
      .then((response) => {
        console.log("The response",response)
        setLoading(false);
        enqueueSnackbar('Sale Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happened. Please check the console', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Sale</h1>
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
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditSale}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditSale;
