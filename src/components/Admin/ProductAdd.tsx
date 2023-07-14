import React, { useState } from 'react';
import { Input  } from 'antd'
const { TextArea } = Input;
const ProductAdd = () => {
  const [additionalDivs, setAdditionalDivs] = useState<{
    id: number;
    color: string;
    size: string;
    content: { id: number; size: string }[];
  }[]>([]);

  const handleAddButtonClickSize = (divId: number) => {
    const newDivIdSize = Date.now();
    const newDivSize = { id: newDivIdSize, size: "defaultSize" };

    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          return { ...div, content: [...div.content, newDivSize] };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const handleAddButtonClick = () => {
    const newDivId = Date.now();
    const newDiv = { id: newDivId, color: "defaultColor", size: "defaultSize", content: [] };
    setAdditionalDivs((prevDivs) => [...prevDivs, newDiv]);
  };

  const handleRemoveDivButtonClick = (id: number) => {
    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.filter((div) => div.id !== id);
      return updatedDivs;
    });
  };

  const handleRemoveDivButtonClickSize = (divId: number, sizeId: number) => {
    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          const updatedContent = div.content.filter((size) => size.id !== sizeId);
          return { ...div, content: updatedContent };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const handleColorSelectChangeSize = (
    event: React.ChangeEvent<HTMLSelectElement>,
    divId: number,
    sizeId: number
  ) => {
    const selectedColor = event.target.value;

    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          const updatedContent = div.content.map((size) => {
            if (size.id === sizeId) {
              return { ...size, color: selectedColor };
            }
            return size;
          });
          return { ...div, content: updatedContent };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const handleSizeSelectChangeSize = (
    event: React.ChangeEvent<HTMLSelectElement>,
    divId: number,
    sizeId: number
  ) => {
    const selectedSize = event.target.value;

    setAdditionalDivs((prevDivs) => {
      const updatedDivs = prevDivs.map((div) => {
        if (div.id === divId) {
          const updatedContent = div.content.map((size) => {
            if (size.id === sizeId) {
              return { ...size, size: selectedSize };
            }
            return size;
          });
          return { ...div, content: updatedContent };
        }
        return div;
      });
      return updatedDivs;
    });
  };

  const renderAdditionalDivsSize = (divId: number) => {
    const div = additionalDivs.find((div) => div.id === divId);

    if (div) {
      return div.content.map((size) => (
        <div key={size.id}>
          <select
            onChange={(event) => handleSizeSelectChangeSize(event, divId, size.id)}
            className='items-center space-x-4  rounded p-2 border-2 border-gray-500'
          >
            <option value="">
              Select a size
            </option>
            <option value="S">S</option>
            <option value="SX">SX</option>
          </select>
          <input type="text" className="border-gray-500 border-2 rounded p-2 w-20 mt-2 mb-2" placeholder="Quantity" />
          <button onClick={() => handleRemoveDivButtonClickSize(divId, size.id)}  className="border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white ">- Size</button>
        </div>
      ));
    }

    return null;
  };

  const renderAdditionalDivs = () => {
    return additionalDivs.map((div) => (
        <div key={div.id} className="flex items-center space-x-4  mt-5">
        <select className="rounded p-2 border-2 border-gray-500">
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
        <select className="border-2 rounded p-2 border-gray-500">
          <option value="">Select a size</option>
          <option value="S">S</option>
          <option value="SX">SX</option>
        </select>
        <input type="text" className="border-2 border-gray-500 rounded p-2 w-20" placeholder="Quantity" />
        <button onClick={() => handleAddButtonClickSize(div.id)} className="border rounded p-2 bg-green-500 font-bold text-yellow-500 hover:bg-green-900">+ Size</button>
        {renderAdditionalDivsSize(div.id)}
        <button onClick={() => handleRemoveDivButtonClick(div.id)} className="border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white ">Remove</button>
      </div>
      
    ));
  };

  return (
    <div>
      <span className="text-2xl mb-5">Add New Product</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div> 
    <label htmlFor="">NAME:</label>
    <Input size="large" placeholder="Name"  className="mt-2 mb-5"/>
    <label htmlFor="">PRICE:</label>
    <Input size="large" placeholder="Price" className="mt-2 mb-5" type="number"/>
    <label htmlFor="">HOTSALE:</label>
    <Input size="large" placeholder="Hotsale" className="mt-2 mb-5" type="number"/>
  </div>
  <div>
  <label htmlFor="">Description:</label>
  <TextArea rows={10} className='mt-2'/>
  </div>
  <div>
  <label
    htmlFor="formFileMultiple"
    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    >Product Image</label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFileMultiple"
    multiple />
  </div>
</div>
      <span className="mr-3">Size & Color & Quantity : </span>
      <button onClick={handleAddButtonClick} className='class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 border border-blue-700 rounded text-black'> +</button>
      {renderAdditionalDivs()}
      <br />
      <button  className=" border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-5 ">ADD</button>
    </div>
  );
};

export default ProductAdd;
