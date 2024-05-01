import React,{useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"



const Navbar = () => {

  const [nav,setNav] = useState(false);

  //json for the navbar section
  const links = [
    
    {
      id: 1,
      name: "Home",
      target:"hero"
    },
    {
      id: 2,
      name: "About",
      target:"about"
    },
    {
      id: 3,
      name: "Projects",
      target:"projects"
    },
    
    {
      id: 5,
      name: "Services",
      target:"services"
    },
    {
      id: 4,
      name: "Contact",
      target:"contact"
    },
  ];
  return (
 
    <>
    <div  className="flex justify-between items-center w-full h-20   px-12  font-serif bg-transparent">
        <h1 className="text-4xl text-[#f9fafb]"> K4Plumbing</h1>

        <ul className=" hidden  sm:flex">
          {links.map(({ id, name,target}) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-[#f9fafb] hover:scale-105 duration-200"
            >
             <Link to={target} smooth duration={500} > {name}</Link>
            </li>
          ))}
        </ul>

        <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 sm:hidden">
           {
            nav ?
            ( <FaTimes className='text-white' size={30} />):(<FaBars className='text-white' size={30}/>)
           }
        </div>
        {nav?  <ul className="flex text-white flex-col justify-center items-center absolute w-full h-screen top-0 opacity-90 left-0 bg-sky-400"> 
         {links.map(({ id, name,target}) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl"><Link to={target}onClick={()=>setNav(!nav)} smooth duration={500}> {name}</Link></li>
          ))}

        </ul> : ""}
      

      </div>
    </>
  )
}

export default Navbar