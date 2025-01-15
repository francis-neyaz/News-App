import React from "react";

const Sidebar = ({ currencies, onCurrencyClick, selectedCurrency }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Currencies</h2>
      <ul className="space-y-2">
        {currencies.map((currency) => (
          <li
            key={currency}
            className={`cursor-pointer p-2 rounded ${
              selectedCurrency === currency ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => onCurrencyClick(currency)}
          >
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
