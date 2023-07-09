import React from 'react'
import { Input } from 'antd';

type Props = object

const Order = (props: Props) => {
    return (
        <div className='mx-5'>
            <h3 className="text-x text-[#222] text-center font-bold tracking-wider my-5">Checkout page</h3>
            <div className='sm:flex sm:flex-row'>
                <div className='border sm:w-6/12 p-10 mr-5 w-full mb-5'>
                    <h4 className="text-xl text-[#222]  font-bold tracking-wider my-2">Shipping Address</h4>
                    <p>Login or Register for faster payment.</p>
                    <div className='flex'>
                        <div className="mt-2 mr-3 w-2/4">
                            <label className='mb-3' htmlFor="">First Name:</label>
                            <Input placeholder="First Name" className='p-3' />
                        </div>
                        <div className="mt-2 w-2/4">
                            <label className='mb-3' htmlFor="">Last Name:</label>
                            <Input placeholder="Last Name" className=' p-3' />
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <label className='mb-3' htmlFor="">Phone:</label>
                        <Input placeholder="Phone" className=' p-3 w-full' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="">Address:</label>
                        <fieldset className="grid grid-cols-2 gap-4">
                            <legend className="sr-only">Delivery</legend>

                            <div>
                                <input
                                    type="radio"
                                    name="AddressOption"
                                    value="address1"
                                    id="address1"
                                    className="peer hidden"
                                    checked
                                />

                                <label
                                    htmlFor="address1"
                                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                    <p className="text-gray-700 text-base border-b">Address 1</p>
                                    <div>
                                        <p className='mt-1 text-gray-900'>Thomas Nolan Kaszas</p>
                                        <p className='mt-1 text-gray-900'>5322 Otter Ln Middleberge</p>
                                        <p className='mt-1 text-gray-900'>FL 32068 Palm Bay FL 32907</p>
                                    </div>
                                </label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name="AddressOption"
                                    value="address2"
                                    id="address2"
                                    className="peer hidden"
                                />

                                <label
                                    htmlFor="address2"
                                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                    <p className="text-gray-700 text-base border-b">Address 2</p>

                                    <div>
                                        <p className='mt-1 text-gray-900'>Thomas Nolan Kaszas</p>
                                        <p className='mt-1 text-gray-900'>5322 Otter Ln Middleberge</p>
                                        <p className='mt-1 text-gray-900'>FL 32068 Palm Bay FL 32907</p>
                                    </div>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className='border sm:w-6/12 p-10 w-full'>
                    <h3 className="text-xl text-[#222] font-bold tracking-wider my-2">Devivery Methods
                    </h3>
                    <fieldset className="space-y-4">
                        <legend className="sr-only">Delivery</legend>
                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden [&:checked_+_label_svg]:block"
                                defaultChecked
                            />

                            <label
                                htmlFor="DeliveryStandard"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Standard Delivery $2.99 (3-5 days)</p>
                                </div>
                            </label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                htmlFor="DeliveryPriority"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Express Delivery $10.99 (1-2 days)</p>
                                </div>
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliverySameDay"
                                id="DeliverySameDay"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                htmlFor="DeliverySameDay"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-gray-700">Same-Day $20.00 (Evening Delivery)</p>
                                </div>
                            </label>
                        </div>
                    </fieldset>
                    <h3 className="text-xl text-[#222] font-bold tracking-wider my-5">Payment Methods</h3>
                    <div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mb-4">
                            <input disabled id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VnPay</label>
                        </div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paypal</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order