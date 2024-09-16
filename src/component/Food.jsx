import { useState } from 'react'
import {burgerData} from './data/burgerData'
import { AiOutlineSearch } from 'react-icons/ai';


const Food = () => {
    const [foods, setFoods] = useState(burgerData);
    const [isActiveButton, setIsActiveButton] = useState(null);
    const [activeButton, setActiveButton] = useState(null)
    const [search, setSearch] = useState("")
    
    // Filter Type
    const filterType = (category1) => {
        setFoods(
            burgerData.filter((item) => {
                return item.category1 === category1;
    })
        );
    };

    const filterSecondType = (category2) => {
        setFoods(
            burgerData.filter((item) => {
                return item.category2 === category2;
    }) 
        );
    };

    // function for selecting the button to display color when clicked
    const handleClick = (buttonIndex) => {
        setIsActiveButton(buttonIndex)
    }
    
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber)
    }

    // retain color of the button when clicked
    const handleDisplayAll =()=> {
        handleClick(1)
        setFoods(burgerData)
    }
    const handleDisplayVeg =()=> {
        handleClick(2)
        filterType('veg')
    }
    const handleDisplayDNonveg =()=> {
        handleClick(3)
        filterType('Non-veg')
    }
    const handleDisplayDrinks =()=> {
        handleClick(4)
        filterType('drinks')
    }

    const handleDisplayBestSeller = () => {
        handleButtonClick(1)
        filterSecondType('best seller')
    }
    const handleDisplaySpicy = () => {
        handleButtonClick(2)
        filterSecondType('spicy')
    }
    const handleDisplayCrunchy = () => {
        handleButtonClick(3)
        filterSecondType('crunchy')
    }

    // remove button color when clicked elsewhere
    const handleBlur = () => {
        setIsActiveButton(null)
    }
    const handleButtonBlur = () => {
        setActiveButton(null)
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl'>Top Rated Menu items</h1>
        {/* Search Area  */}
        <div className='grid justify-center py-8'>
            <div className='bg-gray-200 justify-center rounded-full flex items-center px-2 w-[250px] sm:-w-[400px] lg:w-[500px]'>
                <AiOutlineSearch sixe={20}/>
                <input 
                className='bg-transparent p-2 w-full focus:outline-none' 
                type='text'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                placeholder='search foods'/>
            </div>
        </div>
        {/* Filter Row  */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type  */}
            <div className=''>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex gap-1 max-w-[500px] text-[10px] sm:text-lg'>
                    <button 
                    onBlur={handleBlur} onClick={() => handleDisplayAll()}
                    className={` border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border ${isActiveButton === 1 ? "bg-orange-500 text-white" : "bg-white text-orange-500"}`}>All</button>
                    <button onClick={() => handleDisplayBestSeller()} onBlur={handleButtonBlur} 
                    className={` border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border ${activeButton === 1 ? "bg-orange-500 text-white" : "bg-white text-orange-500"}`}>Best Seller</button>
                    <button 
                    onBlur={handleBlur} onClick={() => handleDisplayVeg()} 
                    className={` border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border ${isActiveButton === 2 ? "bg-orange-500 text-white" : "bg-white text-orange-500"}`}>Veg</button>
                    <button 
                    onBlur={handleBlur} onClick={() => handleDisplayDNonveg()}
                     className={` border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border ${isActiveButton === 3 ? "bg-orange-500 text-white" : "bg-white text-orange-500"}`}>Non-veg</button>
                    <button 
                    onBlur={handleBlur} onClick={() => 
                        handleDisplayDrinks()} 
                    className={` border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border ${isActiveButton === 4 ? "bg-orange-500 text-white" : "bg-white text-orange-500"}`}>Drinks</button>

                </div>
            </div>

        </div>

        {/* Display food  */}
        <a href="https://menu.nowthemenu.com/?name=burger_hut&fbclid=IwY2xjawFR5QNleHRuA2FlbQIxMAABHbnqdYeLChGpA9rcL_stRgUsTpvTpYopkzCPxZUQIgarRXDF7BEM02svWA_aem_bc140_x0potzZRpitiI_qw">

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.filter((item)=>{
                    return search.toLowerCase()=== '' ? item : item.title.toLowerCase().includes(search);
                }).map((item, index) => (
                    <div key={index} className='rounded-lg border shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.title} className='w-full h-[200px] object-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.title}</p>
                            <p>
                                <span className='font-bold'>Rs. {item.price} /-</span>
                            </p>
                        </div>
                        <p className='text-center pb-1 '>Click to Order</p>
                    </div>
                ))}
            </div>
        </a>



    </div>
  )
}

export default Food