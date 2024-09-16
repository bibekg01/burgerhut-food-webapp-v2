import logo from '../assets/Pink Y2K K-Pop Merch Store Logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-red-600 max-w-[1640px] mx-auto px-4 pt-6 mb-5">
      <div className='flex justify-around text-xl font-semibold text-white'>
        {/* Image Section  */}
        <div className='grid justify-center items-center size-[180px] md:size-[200px]'>
          <img src={logo} alt="" />
        </div>

        {/* link Section  */}
        <div className='grid text-center'>
          <h1 className='text-md md:text-2xl border-b-4 border-yellow-600 mb-1'>Quick Links</h1>
          <ul className='mt-1'>
            <li>Best Sellers</li>
            <li>Veg Items</li>
            <li>Non-veg Items</li>
            <li>Refreshing Beverages</li>
          </ul>
        </div>
        <div className='text-center hidden lg:grid'>
          <h1 className='text-2xl border-b-4 border-yellow-600 mb-1 '>Contact Us</h1>
            <p className="flex mt-2"><FaLocationDot className="mr-2 text-black-800"/> Yerahity, Dhungedhara, Banasthali</p>
            <p className="flex"><FaSquarePhone className="mr-2 text-black-800"/> <a href="telto:976-6433920">976-6433920</a></p>
            <p className="flex"><IoIosMail className="mr-2 text-black-800"/> <a href="mailto:shrestharestaurants@gmail.com">shrestharestaurants@gmail.com</a></p>
            <p className="flex"><FaFacebookSquare className="mr-2 text-black-800"/> <a href="https://www.facebook.com/burgerhut08" target="_blank">@burgerhut</a></p>
            <p className="flex"><FaSquareInstagram className="mr-2 text-black-800"/> <a href="https://www.instagram.com/burgerhut_np?igsh=dWVoM3BkMTlxd2s3" target="_blank">@burgerhut</a></p>
        </div>

      </div>
      <hr className='my-1'/>
        {/* Developer Section  */}
        <div className='text-[5px] sm:text-sm flex justify-between font-semibold text-white'>
          <p>Developed by : <a href="https://github.com/bibekg01" target='_blank'><span className='text-black underline italic'>/bibek-gauli/</span></a></p>
          <p>Copyright © 2024. All rights reserved.</p>
        </div>
    </div>
  )
}


export default Footer