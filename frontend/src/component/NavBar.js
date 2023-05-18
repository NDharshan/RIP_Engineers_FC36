import React, { useState } from 'react'
import ProfilePicture from '../images/pokemon.png';
import logo from '../images/logo.png';
import InheritanceChain from '../images/InheritanceChain.gif';


function NavBar() {
    const [aboutModal, setAboutModal] = useState(false)
  return (
    <div className='mx-15'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <img src={logo} className="h-10 m-1" alt="My Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Inheritance Chain</span>
        </a>
        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <button href="#" className="block py-2 pl-3 pr-4 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500" aria-current="page">Home</button>
                <button onClick={() => setAboutModal(true)} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</button>
                <button href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</button>
            </div>
        </div>
        </div>
        </nav>

        {aboutModal ? 
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h2 className="mb-4 text-3xl center font-bold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-2xl dark:text-white" >About</h2>
                    <br/>
                    <img src={InheritanceChain} alt="my-gif" />
                    <br/><br/>
                    <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setAboutModal(false)}
                    >
                        Submit
                    </button>
                </div>
              </div>
            </div>
          </div>

            
        : null }
    </div>
  )
}

export default NavBar