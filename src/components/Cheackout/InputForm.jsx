import React from 'react';

const InputForm = ({ label, placeholder }) => {
  return (
    <div className='flex flex-col'>
      <label className=" font-semibold ">{label}</label>
      <input
        className="px-5 outline-none rounded-md border p-3 block w-72 lg:w-96"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default InputForm;
