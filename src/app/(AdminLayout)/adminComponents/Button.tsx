import React from "react";
export type TButtonProps = {
  label: string;
};
const Button = ({ label }: TButtonProps) => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {label}
      </button>
    </div>
  );
};

export default Button;
