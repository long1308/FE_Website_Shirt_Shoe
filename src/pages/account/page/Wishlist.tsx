import React from 'react';
import ListGroup from '../ListMenuAccount';
import { Item } from '../../../components';
const Wishlist = () => {
  return (
    <div className="flex">
      <div className="w-full ">
          <h1 className="text-3xl normal-case font-semibold mb-5">My Wishlist</h1>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
          <Item icon={'RiDeleteBin6Line'} buttonAdd={"VIEW FULL INFO"} />
        </main>
      </div>
    </div>
  );
};

export default Wishlist;
