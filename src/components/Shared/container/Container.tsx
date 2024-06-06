import React from "react";
type TContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return (
    <div
      className="max-w-screen-xl flex flex-col mx-auto xl:p-16 lg:p-12 md:p-8 sm:p-2 p-4
     "
    >
      {children}
    </div>
  );
};

export default Container;
