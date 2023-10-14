import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateSale from './pages/CreateSales';
import ShowSale from './pages/ShowSale';
import EditSale from './pages/EditSale';
import DeleteSale from './pages/DeleteSale';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales/create' element={<CreateSale />} />
      <Route path='/sales/details/:id' element={<ShowSale />} />
      <Route path='/sales/edit/:id' element={<EditSale />} />
      <Route path='/sales/delete/:id' element={<DeleteSale />} />
    </Routes>
  );
};

export default App;
