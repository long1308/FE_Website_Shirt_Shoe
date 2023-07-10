import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ListGroup = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const navigate = useNavigate();

  const handleTabClick = (label: string, path: string) => {
    setSelectedTab(label);
    navigate(path); 
  };

  return (
    <div className="w-full sm:px-20 lg:px-40">
      <div className="w-40">
        {[
          { label: "My Account Details", path: "/ListGroup/Account" },
          { label: "My Addresses", path: "/ListGroup/Addresses" },
          { label: "My Wishlist", path: "/ListGroup/Wishlist" },
          { label: "My Order History", path: "/ListGroup/History" },
        ].map((item) => (
          <div
            key={item.label}
            className={`cursor-pointer py-2 px-4 mt-5 text-xl  ${selectedTab === item.label ? 'bg-teal-400 text-white' : 'bg-white'}`}
            onClick={() => handleTabClick(item.label, item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="pl-4">
        {[
          { content: "Account details content", path: "/ListGroup/Account" },
          { content: "Addresses content", path: "/addresses" },
          { content: "Wishlist content", path: "/wishlist" },
          { content: "Order history content", path: "/order-history" },
        ].map((item, index) => (
          <div
            key={index}
            className={`py-2 ${selectedTab === item.content ? '' : 'hidden'}`}
          >
            {selectedTab === item.content && (
              <TabPanel value={item.content}>
                {item.content}
              </TabPanel>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
