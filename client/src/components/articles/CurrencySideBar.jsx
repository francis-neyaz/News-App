import React from "react";

const CurrencySideBar = () => {
  const currencies = [
    { id: 1, title: "USD (United States Dollar)" },
    { id: 2, title: "EUR (Euro)" },
    { id: 3, title: "GBP (British Pound Sterling)" },
    { id: 4, title: "CHF (Swiss Franc)" },
    { id: 5, title: "AUD (Australian Dollar)" },
    { id: 6, title: "CAD (Canadian Dollar)" },
    { id: 7, title: "CNY (Chinese Yuan)" },
  ];

  return (
    <div className="w-1/4 p-4 rounded-lg shadow-lg bg-gradient-to-r from-yellow-400 to-red-500">
      <h1 className="text-3xl font-bold text-center p-2 text-white">Currencies</h1>
      <ul className="mt-6 space-y-3 px-2">
        {currencies.map((item) => (
          <li
            key={item.id}
            className="text-gray-800 text-sm p-3 bg-white rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-all cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencySideBar;

