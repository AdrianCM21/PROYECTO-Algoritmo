import React from 'react'
import { Link } from 'react-router-dom'
import {IconGithub,IconFacebook,IconLinkedin,IconBxlGmail} from '../icons/Git_icon'
import './layout.css'

const Footer:React.FC = () => {
  return (
    <div>
    <footer className="bg-[#232e49] shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold text-gray-500">Aztro Estudio</span>
                </Link>
                <div className="flex flex-wrap items-center mb-8 text-m font-medium text-gray-200 sm:mb-0 dark:text-gray-400 containerRedes sm:items-center">
                    <a className='redes' target="_blank" href='https://github.com/AdrianCM21'>
                        <IconGithub/>
                    </a>
                    <a className='redes' target="_blank" href='https://github.com/AdrianCM21'>
                        <IconFacebook/>
                    </a>
                    <a className='redes' target="_blank" href='https://www.linkedin.com/in/adrian-casco-morinigo-395b7a250/'>
                        <IconLinkedin/>
                    </a>
                    <a className='redes' target="_blank" href='mailto:adriancasco2002@gmail.com/'>
                        <IconBxlGmail/>
                    </a>
                    
                </div>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 sm:items-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Adrian™</a>. Todos los derechos reservados.</span>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer