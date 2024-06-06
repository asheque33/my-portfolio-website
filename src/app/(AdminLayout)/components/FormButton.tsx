import React from "react";

const FormButton = ({ type, name }) => {
  return (
    <button
      className="block rounded-md px-3 py-1.5 bg-blue-400 mt-2 text-white"
      type={type}
    >
      {name}
    </button>
  );
};

export default FormButton;
