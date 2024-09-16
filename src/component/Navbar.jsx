// import { useState } from 'react'
// import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
// import { BsFillSaveFill } from 'react-icons/bs'
// import {TbTruckDelivery} from 'react-icons/tb'
// import {FaUserFriends, FaWallet} from 'react-icons/fa'
// import {MdFavorite, MdHelp, MdOutlineRestaurantMenu } from 'react-icons/md'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import logo from '../assets/Pink Y2K K-Pop Merch Store Logo.png'

const Navbar = () => {
    


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left side  */}
        <div className='flex items-center gap-6'>
            {/* OnClick = {setNav(!nav) } */}
            <div className='cursor-pointer'>  
                <AiOutlineMenu/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'><img src={logo} alt="" className='w-28 bg-red-600 rounded-xl'/></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        {/* Search Input  */}
        {/* <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:-w-[400px] lg:w-[500px]'>
            <AiOutlineSearch sixe={20}/>
            <input 
            className='bg-transparent p-2 w-full focus:outline-none' 
            type='text'
            placeholder='search'/>
        </div> */}
        {/* Menu button  */}
            <a href="https://menu.nowthemenu.com/?name=burger_hut&fbclid=IwY2xjawFR5QNleHRuA2FlbQIxMAABHbnqdYeLChGpA9rcL_stRgUsTpvTpYopkzCPxZUQIgarRXDF7BEM02svWA_aem_bc140_x0potzZRpitiI_qw">
                <button className='bg-black text-white flex items-center py-2'>
                    <MdOutlineRestaurantMenu  size={20} className='mr-2'/>Menu
                </button>
            </a>

        {/* Mobile Menu  */}
        {/* Overlay  */}
        {/* {nav ?         <div className='bg-black/80 fixed w-full h-screen z-10 top-0'></div> : ""} */}


        {/* Side drawer Menu  */}
        {/* <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Burger <span className='font-bold'>Hut</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-400'>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmenu.nowthemenu.com%2F%3Fname%3Dburger_hut%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0Kn8GrHCjejFTNI4vdbK1rPfp25yJ8c3wlmJ91QQYq0trgUbGChJyVDbY_aem_4cnCS1toPTPjqVsn0JKdZg&h=AT3KLQfIEVbFC9xEsU4Rwr7qNS4uYBkkmhir1bz0Azf3jzgNCDYZR5imRCzrO9vum5Vbgz8jP9imALe4zrqP93xP-ZAmmoPQjpS32UX-1mQh0_k0VvZaVCtvMac3_zoVNr7t2njcyRL_is7gbcEwYg"><li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Order</li></a>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favourites</li>
                    <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                    <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
        </div> */}
    </div>
  )
}

export default Navbar