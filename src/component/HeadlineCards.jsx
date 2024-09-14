import MozzrellaCombo from '../assets/FoodImages/mozzarella Combo.jpg'
import DoubleChickenCombo from '../assets/FoodImages/Double Chicken Combo.jpg'
import WeekendSpecial from '../assets/FoodImages/Weekend Combo.jpg'


const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
        {/* Card  */}
        <div className="rounded-xl relative">
            {/* Overlay  */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4 ">Mozzarella Combo</p>
                <p className="px-2 font-semibold">Cheesy Delight</p>
                <a href="https://menu.nowthemenu.com/?name=burger_hut&fbclid=IwY2xjawFR5QNleHRuA2FlbQIxMAABHbnqdYeLChGpA9rcL_stRgUsTpvTpYopkzCPxZUQIgarRXDF7BEM02svWA_aem_bc140_x0potzZRpitiI_qw"><button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button></a>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={MozzrellaCombo} alt="/" />
        </div>
        {/* Card  */}
        <div className="rounded-xl relative">
            {/* Overlay  */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4 ">Double Chicken Combo</p>
                <p className="px-2 font-semibold">Chicken Delicacy</p>
                <a href="https://menu.nowthemenu.com/?name=burger_hut&fbclid=IwY2xjawFR5QNleHRuA2FlbQIxMAABHbnqdYeLChGpA9rcL_stRgUsTpvTpYopkzCPxZUQIgarRXDF7BEM02svWA_aem_bc140_x0potzZRpitiI_qw"><button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button></a>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={DoubleChickenCombo} alt="/" />
        </div>
        {/* Card  */}
        <div className="rounded-xl relative">
            {/* Overlay  */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4 ">Weekend Special</p>
                <p className="px-2 font-semibold">Holiday Treats</p>
                <a href="https://menu.nowthemenu.com/?name=burger_hut&fbclid=IwY2xjawFR5QNleHRuA2FlbQIxMAABHbnqdYeLChGpA9rcL_stRgUsTpvTpYopkzCPxZUQIgarRXDF7BEM02svWA_aem_bc140_x0potzZRpitiI_qw"><button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button></a>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={WeekendSpecial} alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards


