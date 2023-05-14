import React from 'react'
import { Link } from 'react-router-dom'

const ButtonGoBack = () => {
  return (
    <div>
      <Link to="/">
        <button className="mb-20 hover:text-orange-400 duration-200">
          Go back
        </button>
      </Link>
    </div>
  );
}

export default ButtonGoBack
