import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const SalesTable = ({ sales }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Customer Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Product Model Number
          </th>
          <th className='border border-slate-600 rounded-md'>Sold Price</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr key={sale._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {sale.customerName}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {sale.productModelNumber}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              ${sale.soldPrice}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/sales/details/${sale._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/sales/edit/${sale._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/sales/delete/${sale._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
