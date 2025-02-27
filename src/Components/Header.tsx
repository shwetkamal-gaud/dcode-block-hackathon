import { useState } from 'react';
import logo from '../assets/logodb.svg'
import Button from './Button'
import { FaBars, FaTimes } from "react-icons/fa";
import HackForIndia from '../assets/HackIndia.svg'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navBar = [
        {
            id: 1,
            name: 'Overview',
        },
        {
            id: 2,
            name: 'Create Team',
        },
        {
            id: 3,
            name: 'Prizes & Sponsers',
        },
        {
            id: 4,
            name: 'FAQs',
        },
        {
            id: 5,
            name: 'Judging & Rules',
        },
        {
            id: 6,
            name: 'Resorces',
        },

    ]

    return (
        <header className="w-full flex flex-col ">
            <div className='flex bg-black flex-col px-10 py-3'>
                <div className='flex justify-between'>
                    <img src={logo} alt='logo' />
                    <Button  title={'Sign in'} />
                </div>
            </div>
            <div className="bg-transparent w-full h-auto css-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 6" fill="none">
                    <path d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z" fill="#B026FF" fill-opacity="0.5">
                    </path>
                </svg>
            </div>
            <nav className="md:mx-auto text-white shadow-lg z-50">
                <div className="mx-auto flex justify-between gap-10 items-center p-4">
                    <div className="text-2xl font-bold flex items-center gap-3 ">
                        <img src={HackForIndia} alt='HackForIndia' />
                        <h1 className='capitalize' style={{ textTransform: 'capitalize' }}>HackIndia</h1>
                    </div>
                    <div className="hidden md:flex md:flex-wrap md:gap-5 md:border-3 md:px-6 py-3 md:border-gray-400/10  bg-[#28083A] rounded-lg">
                        {
                            navBar.map((item) => {
                                return (
                                    <Button  key={item.id} title={item.name} />
                                )
                            })
                        }

                    </div>
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='cursor-pointer' size={24} /> : <FaBars className='cursor-pointer' size={24} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-[#B026FF] text-white flex flex-col absolute w-full px-4 ">
                        {navBar.map((item) => {
                            return (
                                <a key={item.id} href="#" className="text-white py-2 hover:border-b hover:border-white me-auto">{item.name}</a>
                            )
                        })}


                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header