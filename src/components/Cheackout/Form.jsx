import React from 'react'
import InputForm from './InputForm'

const Form = () => {
  return (
    <div className="bg-white max-md:items-center lg:px-20 lg:py-10 rounded-md  lg:w-[1000px] flex flex-col gap-10">
      <h2 className="uppercase font-bold text-3xl">Checkout</h2>
      <h6 className="text-orange-400 font-semibold uppercase">
        Billing detail
      </h6>
      <div className=" lg:flex lg:justify-between">
        <InputForm label="Name" placeholder="Alexei Ward" />
        <InputForm label="Email address" placeholder="alexei@mail.com" />
      </div>
      <div>
        <InputForm label="Phone number" placeholder="+1 202-555-0136" />
      </div>
      <div className="flex flex-col max-md:items-center lg:flex lg:flex-col gap-5">
        <h6 className="text-orange-400 font-semibold uppercase">
          Shpping info
        </h6>
        <InputForm label="Address" placeholder="1137 Williams Avenue" />
        <div className="lg:flex lg:justify-between">
          <InputForm label="ZIP Code" placeholder="city" />
          <InputForm label="City" placeholder="Toronto" />
        </div>
        <div className="lg:flex ">
          <InputForm label="Country" placeholder="Canada" />
          <div></div>
        </div>
        <h6 className="text-orange-400 uppercase font-bold">Payment details</h6>
        <div className="flex flex-col max-md:items-center lg:flex lg:flex-row justify-between">
          <label className="font-bold">Pay method</label>
          <div className="flex flex-col max-md:items-center lg:flex-col gap-5">
            <div className="p-5 border rounded-md  lg:flex-row gap-1 items-center w-72 cursor-pointer">
              <input
                className="cursor-pointer"
                type="radio"
                name="pay"
                id="pay1"
              />
              <label htmlFor="pay1">e-Money</label>
            </div>
            <div className="p-5 lg:w-96  border rounded-md lg:flex lg:flex-row gap-1 items-center ">
              <input
                className="cursor-pointer"
                type="radio"
                name="pay"
                id="pay2"
              />
              <label htmlFor="pay2">Cash on delivery</label>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between">
          <InputForm label="e-Money Number" placeholder="Alexei Ward" />
          <InputForm label="e-Money PIN" placeholder="Card number" />
        </div>
      </div>
    </div>
  );
}

export default Form
