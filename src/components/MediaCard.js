import React from 'react'

const MediaCard = ({handleOnclick,icon,label}) => {
  return (
    <button
      onClick={handleOnclick}
      className="h-20 w-1/4 flex items-center justify-center gap-2  bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img src={icon} alt="YouTube" className="h-6" />
      <span className="text-lg font-semibold">{label}</span>
    </button>
  );
}

export default MediaCard