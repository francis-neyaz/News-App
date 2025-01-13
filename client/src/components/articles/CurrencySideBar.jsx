import React from 'react'
import { Link } from 'react-router-dom'

const CurrencySideBar = () => {

const Currrencies=[
    {id:1,
        title:"USD (United States Dollar)",
    },
    {
        id:2,
        title:"EUR (Euro)"
    },
    {
        id:3,
        title:"GPB (British Pound Sterling"
    },
    {
        id:4,
        title:"CHF (Swiss Franc"
    },
    {
        id:5,
        title:"AUD (Australian Dollar)"
    },
    {
        id:6,
        title:"CAD (Canadian Dollar)"
    },
    {
        id:7,
        title:"CNY (Chinese Yuan)"
    }

]



  return (
    <div className="w-1/4 bg-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold text-center p-2 text-gray-600">Currencies</h1>
      <ul className="mt-10 space-y-4 px-4">
      {
        Currrencies.map((item)=>(
<li  className="text-gray-600 text-xs p-3 bg-gray-100 rounded-lg hover:text-gray-900 hover:bg-white transition-colors cursor-pointer" key={item.id}>{item.title}</li>
        ))
      }
</ul>
    </div>
  )
}

export default CurrencySideBar
