import React from "react";
type TTabButtonProps = {
  active: boolean;
  selectedTab: () => void;
  children: React.ReactNode;
};

const TabButton = ({ active, selectedTab, children }: TTabButtonProps) => {
  const buttonClass = active
    ? "text-white border-b border-primary-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectedTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
