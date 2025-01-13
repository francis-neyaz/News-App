import React from 'react'
import CurrencyChart from '../components/articles/CurrencyChart';
import Sidebar from '../components/articles/SideBar';
import CurrencySideBar from '../components/articles/CurrencySideBar';

function Currency() {
  return (
    <div className="w-full flex  gap-2 h-screen bg-white">
    <CurrencySideBar/>
      <CurrencyChart/>
    </div>
  )
}

export default Currency;
