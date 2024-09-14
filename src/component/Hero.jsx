import logo from '../assets/Pink Y2K K-Pop Merch Store Logo.png'
import { TbTruckDelivery } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
            <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center gap-10 sm:gap-18 lg:gap-28">
                <div>
                  <img src={logo} alt="" className='w-32 sm:w-48 mx-auto'/>
                  <h1 className="px-4 text-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">for the  <span className="text-orange-500 font-pacifico">Love</span>
                  <span className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">of <span className="text-orange-500 font-pacifico font-bold">Burgers</span></span>
                  </h1>
                </div>
                <div className='flex justify-around items-end'>
                  <p className='flex text-[12px] sm:text-lg lg:text-2xl font-semibold'><TbTruckDelivery className='bg-red-600 rounded-full text-xl md:text-3xl p-1 mr-2'/>Free Delivery Within 2 Km</p>
                  <p className='flex text-[12px] sm:text-lg lg:text-2xl font-semibold'><FaPhoneAlt className='bg-red-600 rounded-full text-xl md:text-3xl p-1 mr-2'/>9874569855</p>
                  <p className=' text-[12px] sm:text-lg lg:text-2xl font-semibold hidden sm:flex'><FaLocationDot className='bg-red-600 rounded-full text-xl md:text-3xl p-1 mr-2'/>Banasthali, Kathmandu</p>
                </div>
            </div>
            <img className=" w-full max-h-[500px] object-cover" src="https://i.makeagif.com/media/8-13-2020/a4kyah.gif" alt="" />
        </div>
    </div>
  )
}

export default Hero