import React from 'react';
import ListGroup from '../ListGroup';
import { Item } from '../../../components';


const Wishlist = () => {
  return (
    <div className="flex ">
      <div className="w-full md:w-1/4 md:mr-6 mb-4 md:mb-0">
        <ListGroup />
      </div>
      <div className="w-full md:w-3/4">
        <div className='mt-6'>
        <h1 className="text-3xl normal-case font-bold">My Wishlist</h1>
        </div>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />
        <Item icon={'RiDeleteBin6Line'} />

        </main>
      </div>
    </div>
  );
};

export default Wishlist;
