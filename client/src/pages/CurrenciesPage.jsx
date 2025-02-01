import React, { useState } from "react";
import Sidebar from "../components/currencies/Sidebar";
import Feed from "../components/currencies/Feed";


const CurrenciesPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "INR"];

  return (
    <div className="flex h-screen gap-2 m-2">
      <Sidebar
        currencies={currencies}
        onCurrencyClick={(currency) => setSelectedCurrency(currency)}
        selectedCurrency={selectedCurrency}/>
      <Feed selectedCurrency={selectedCurrency} />
    </div>
  );
};

export default CurrenciesPage;
