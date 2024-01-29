import React from 'react'

import i18next from 'i18next'

import { useTranslation, initReactI18next } from "react-i18next";



import Logo from '../components/Logo'
import Links from '../components/Links'
import Utilits from '../components/Utilits'
import Menu from '../components/Menu';
import SideBar from '../components/SideBar';
import { useUserContext } from '../context/usercontext';
import { BarLoader } from 'react-spinners';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  }
  
]


const Navbar = () => {
 const [sideBar, setSideBar] = React.useState(false)
 const {isLoading} = useUserContext()
 const{t} = useTranslation()
  return (
    <div className="nav h-14 w-full z-50 bg-white">
          <nav className='flex items-center justify-center gap-28 mt-4 relative'>
      <Logo />
      <Menu sideBar={sideBar} setSideBar={ setSideBar }/>
      <Links />
      <Utilits />
      <SideBar show={sideBar} setSide={ setSideBar } />
      <div className="language-select">
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  
                  <button
                   className='dropdown-item'
                   onClick={()=>i18next.changeLanguage(code)}>
        
                    {name}
                    </button>
                </li>
              ))}
            </ul>
          </div>
      </nav>
      <div className="loader">
      {isLoading ? <BarLoader width={'100%'} speedMultiplier={0.8} className=' fixed ' color="#6e6e6e" /> : ''}
      </div>
    </div>
  )
}

export default Navbar