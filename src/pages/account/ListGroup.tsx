import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const ListGroup = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const [hoveredTab, setHoveredTab] = useState('');

  const navigate = useNavigate();

  const handleTabClick = (label: string, path: string) => {
    setSelectedTab(label);
    navigate(path);
  };

  const handleTabHover = (label: string) => {
    setHoveredTab(label);
  };

  const tabsData = [
    { label: "My Account ", path: "/account", content: "Account details content" },
    { label: "My Addresses", path: "/addresses", content: "Addresses content" },
    { label: "My Wishlist", path: "/wishlist", content: "Wishlist content" },
    { label: "My  History", path: "/history", content: "Order history content" },
  ];

  return (
    <div className="w-full sm:px-20 lg:px-40 mt-5 ">
      <div className="w-52 border-black shadow-lg shadow-indigo-500/40  ">
        {tabsData.map((item) => (
          <div
            key={item.label}
            className={`cursor-pointer  p-5  text-xl border-b-4 flex  border-brown-50-500  ${selectedTab === item.label || hoveredTab === item.label ? 'bg-teal-400 text-white' : 'bg-white'}`}
            onClick={() => handleTabClick(item.label, item.path)}
            onMouseEnter={() => handleTabHover(item.label)}
            onMouseLeave={() => handleTabHover('')}

          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="pl-4">
        {tabsData.map((item, index) => (
          <div key={index} className={`py-2 ${selectedTab === item.label ? '' : 'hidden'} ` }>
            {selectedTab === item.label && (
              <TabPanel value={item.label}>
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
