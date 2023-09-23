import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/SASWAT Logo - Black with Transparent Background.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { display } from "@mui/system";
import { GiToggles } from "react-icons/gi";
export default function Header() {
    const [show, setshow] = useState('hidden')
    const showw=()=>{
        if(show==='hidden'){
            setshow('');
        }
        else{
            setshow('hidden');
        }
    }
    console.log(show);
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className=" bg-custom-dark-yellow rounded-lg px-4 lg:px-6 py-2.5" onClick={()=>showw()}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="#" className="flex items-center " >
            <img src={logo1} className="mr-3 h-header" alt="Logo" />
          </Link>
          <GiToggles className="lg:hidden w-6 h-12"/>
          {/* <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
        //             </div> */}
        {/* //   <Dropdown className="lg:hidden ">
        //     <Dropdown.Toggle variant="success" className="mt-2" id="dropdown-basic">
        //       <div className="w-8 my-1 border-2 border-black"></div>
        //       <div className="w-8 my-1 border-2 border-black"></div>
        //       <div className="w-8 my-1 border-2 border-black"></div>
        //     </Dropdown.Toggle>

        //     <Dropdown.Menu className="flex flex-col border-2 border-black bg-custom-black text-custom-light-light-yellow p-5 rounded-lg">
        //       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //     </Dropdown.Menu>
        //   </Dropdown> */}
          <div
            className={`${show} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
