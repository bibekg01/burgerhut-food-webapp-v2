import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Location = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <div>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Our Location</h1>
            <div className="grid md:grid-cols-2 justify-around gap-6 lg:gap-14 py-8">
                <iframe className="w-full h-[260px] rounded-l-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.736670693618!2d85.29223630000003!3d27.72477300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19678e60996b%3A0x2f4945df1f6722e6!2sBurger%20Hut!5e1!3m2!1sen!2snp!4v1725690110162!5m2!1sen!2snp"style={{border:0}} loading="lazy" ></iframe>
                <div className="text-xl lg:text-2xl rounded-r-xl grid bg-orange-200 px-4 py-6">
                    <p className="flex"><FaLocationDot className="text-2xl lg:text-3xl mr-2 text-black-800"/> Yerahity, Dhungedhara, Banasthali</p>
                    <p className="flex"><IoIosMail className="text-2xl lg:text-3xl mr-2 text-black-800"/> <a href="mailto:shrestharestaurants@gmail.com">shrestharestaurants@gmail.com</a></p>
                    <p className="flex"><FaSquarePhone className="text-2xl lg:text-3xl mr-2 text-black-800"/> <a href="telto:976-6433920">976-6433920</a></p>
                    <p className="flex"><FaFacebookSquare className="text-2xl lg:text-3xl mr-2 text-black-800"/> <a href="https://www.facebook.com/burgerhut08" target="_blank">@burgerhut</a></p>
                    <p className="flex"><FaSquareInstagram className="text-2xl lg:text-3xl mr-2 text-black-800"/> <a href="https://www.instagram.com/burgerhut_np?igsh=dWVoM3BkMTlxd2s3" target="_blank">@burgerhut</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location