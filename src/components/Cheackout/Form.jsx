import React from 'react'
import InputForm from './InputForm'

const Form = () => {
  return (
    <div className="bg-white px-20 py-10 rounded-md w-[1000px] flex flex-col gap-10">
      <h2 className="uppercase font-bold text-3xl">Checkout</h2>
      <h6 className="text-orange-400 font-semibold uppercase">
        Billing detail
      </h6>
      <div className="flex justify-between">
        <InputForm label="Name" placeholder="Alexei Ward" />
        <InputForm label="Email address" placeholder="alexei@mail.com" />
      </div>
      <div>
        <InputForm label="Phone number" placeholder="+1 202-555-0136" />
      </div>
      <div className="flex flex-col gap-5">
        <h6 className="text-orange-400 font-semibold uppercase">
          Shpping info
        </h6>
        <InputForm label="Address" placeholder="1137 Williams Avenue" />
        <div className="flex justify-between">
          <InputForm label="ZIP Code" placeholder="city" />
          <InputForm label="City" placeholder="Toronto" />
        </div>
        <div className="flex ">
          <InputForm label="Country" placeholder="Canada" />
          <div></div>
        </div>
        <h6 className="text-orange-400 uppercase font-bold">Payment details</h6>
        <div className="flex flex-row justify-between">
          <label className="font-bold">Pay method</label>
          <div className="flex flex-col gap-5">
            <div className="p-5 border rounded-md flex flex-row gap-1 items-center w-72 cursor-pointer">
              <input
                className="cursor-pointer"
                type="radio"
                name="pay"
                id="pay1"
              />
              <label htmlFor="pay1">e-Money</label>
            </div>
            <div className="p-5 w-96 border rounded-md flex flex-row gap-1 items-center ">
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
        <div className="flex justify-between">
          <InputForm label="e-Money Number" placeholder="Alexei Ward" />
          <InputForm label="e-Money PIN" placeholder="Card number" />
        </div>
      </div>
    </div>
  );
}

export default Form
