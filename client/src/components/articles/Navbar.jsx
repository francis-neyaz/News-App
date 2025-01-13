import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
  const navItems=[
{
  id:1,
  title:"Home Page",
  path:"/"

},
{
  id:2,
  title:"News Chat",
  path:"/c"
},
{
  id:3,
  title:"Currenncies",
  path:"/cr"
},
{
  id:4,
  title:"About",
  path:"/a"
}
];
  
return (
    <nav className="bg-gray-100 text-white py-4 px-6 flex m-2 justify-between items-center rounded-lg">
      <div className="text-2xl text-blue-700 font-bold">Flash News</div>
      <div className="flex items-center gap-10">

{
  navItems.map((item)=>(
    <Link className="text-blue-700 text-xs font-bold" to={item.path}>{item.title}</Link>
  ))
}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Headlines..."
          className="px-4 py-2 rounded-l-lg border focus:outline-none"/>
        <button className="bg-blue-400 px-4 py-2 border rounded-r-lg text-gray-500">Search</button>
      </div>
    </nav>
  );
};
export default Navbar;



