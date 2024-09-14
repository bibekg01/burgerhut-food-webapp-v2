import chickenburger from '../../assets/FoodImages/chicken burger.jpg'
import hamburger from '../../assets/FoodImages/ham burger.jpeg'
import vegburger from '../../assets/FoodImages/vegburger.jpg'
import friedchicken from '../../assets/FoodImages/spicy fried chicken.jpg'
import periperifriedchicken from '../../assets/FoodImages/peri peri fried chicken.jpg'
import epicburger from '../../assets/FoodImages/epic burgers.jpg'
import crunchymeal from '../../assets/FoodImages/crunchy meal.jpg'
import spicymeal from '../../assets/FoodImages/spicy meal.jpg'
import partypack from '../../assets/FoodImages/party pack.jpg'
import vegcombo from '../../assets/FoodImages/veg combo.jpg'
import chickencombo from '../../assets/FoodImages/chicken combo.jpg'
import weekendspecial from '../../assets/FoodImages/weekend special.jpg'
import familypack from '../../assets/FoodImages/family pack.jpg'
import bigburgcombo from '../../assets/FoodImages/big burg combo.jpg'
import crunchychickencombo from '../../assets/FoodImages/crunchy chicken combo.jpg'
import mozzarellacombo from '../../assets/FoodImages/mozzarella Combo.jpg'
import icedlemonade from '../../assets/FoodImages/iced lemonade.jpeg'
import mintlemonade from '../../assets/FoodImages/mint lemonade.jpg'
import virginmojito from '../../assets/FoodImages/virgin mojito.jpg'
import extravigrinmojito from '../../assets/FoodImages/extra virgin mojito.jpg'




export const burgerData = [
  {
    id: 11,
    title: 'Chicken Burger',
    price: 180,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '1x chicken burger',
    image: `${chickenburger}`,
  },
  {
    id: 25,
    title: 'Ham Burger',
    price: 180,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '1x chicken burger',
    image: `${hamburger}`, 
  },
  {
    id: 16,
    title: 'Veg Burger',
    price: 150,
    category1: 'veg',
    category2: 'spicy',
    content: '1x veg burger',
    image: `${vegburger}`,
  },
  {
    id: 26,
    title: 'Veg Cheese Burger',
    price: 200,
    category1: 'veg',
    category2: 'spicy',
    content: '1x veg burger',
    image: `${vegburger}`,
  },
  {
    id: 27,
    title: 'Spicy Fried Chicken',
    price: 260,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '',
    image: `${friedchicken}`,
  },
  {
    id: 28,
    title: 'Peri Peri Fried Chicken',
    price: 290,
    category1: 'Non-veg',
    category2: 'spicy',
    content: '',
    image: `${periperifriedchicken}`, 
  },
  {
    id: 12,
    title: 'Epic Burger',
    price: 230,
    category1: 'Non-veg',
    content: '1x Epic burger',
    image: `${epicburger}`,
  },
  {
    id: 3,
    title: 'Crunchy Meal',
    price: 349,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '1x crunchy chicken burger, 1x cold drink, 1x chicken fries',
    image: `${crunchymeal}`,
  },
  {
    id: 4,
    title: 'Spicy Meal',
    price: 299,
    category1: 'Non-veg',
    category2: 'spicy',
    content: '1x spicy chicken burger, 1x cold drink, 1x chicken fries',
    image: `${spicymeal}`,
  },
  {
    id: 18,
    title: 'Party Pack (Spicy)',
    price: 1499,
    category1: 'Non-veg',
    category2: 'spicy',
    content: '6x spicy chicken burger, 6x soft drinks, 3x chicken fries, 3 onion rings',
    image: `${partypack}`,
  },
  {
    id: 19,
    title: 'Corporate Pack (Crunchy)',
    price: 2099,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '6x crunchy chicken burger, 6x soft drinks, 3x chicken fries, 3 onion rings',
    image: `${partypack}`,
  },
  {
    id: 1,
    title: 'Veg Combo',
    price: 599,
    category1: 'veg',
    category2: 'best seller',
    content: '2x burger, 2x drinks, 1x fries, 1x onion rings, 1Mozzarella Fries',
    image: `${vegcombo}`,
  },
  {
    id: 2,
    title: 'Chicken Combo',
    price: 599,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '2x burger, 2x drinks, 1x chicken fries, 1x onion rings',
    image: `${chickencombo}`,
  },
  {
    id: 5,
    title: 'Weekend Special (non-veg)',
    price: 599,
    category1: 'Non-veg',
    category2: 'spicy',
    content: '1x crunchy chicken burger, 1x spicy chicken burger, 1x spicy french fries, 2x refreshing drinks, 1x onion rings',
    image: `${weekendspecial}`,
  },
  {
    id: 13,
    title: 'Weekend Special (veg)',
    price: 599,
    category1: 'veg',
    category2: 'spicy',
    content: '1x crunchy chicken burger, 1x spicy chicken burger, 1x spicy french fries, 2x refreshing drinks, 1x onion rings',
    image: `${weekendspecial}`,
  },
  {
    id: 6,
    title: 'Family Pack 1',
    price: 999,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '4x burger, 2x fries, 3x onion rings, 2 Mozzarella Fries',
    image: `${familypack}`,
  },
  {
    id: 14,
    title: 'Family Pack 1 (veg)',
    price: 999,
    category1: 'veg',
    category2: 'spicy',
    content: '4x burger, 2x fries, 3x onion rings, 2 Mozzarella Fries',
    image: `${familypack}`,
  },
  {
    id: 8,
    title: 'Big Burgh Combo',
    price: 840,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '2x big burgh, 2x soft drinks, 2x onion rings',
    image: `${bigburgcombo}`,
  },
  {
    id: 9,
    title: 'Crunchy Chicken Combo',
    price: 840,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '2x crunchy chicken burger, 2x soft drinks, 2x onion rings, 2x chicken fries',
    image: `${crunchychickencombo}`,
  },
  {
    id: 7,
    title: 'Family Pack 2',
    price: 1099,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '4x burger, 4x cold drinks, 1x fries, 1x spicy fries, 2x onion rings, 2x chicken Fries',
    image: `${familypack}`,
  },
  {
    id: 15,
    title: 'Family Pack 2 (veg)',
    price: 1099,
    category1: 'veg',
    category2: 'spicy',
    content: '4x burger, 4x cold drinks, 1x fries, 1x spicy fries, 2x onion rings, 2x chicken Fries',
    image: `${familypack}`,
  },
  {
    id: 10,
    title: 'Mozzarella Combo',
    price: 890,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '2x mozzarella crunchy chicken burger, 2x soft drinks, 1x chicken fries, 1x mozzarella fries',
    image: `${mozzarellacombo}`,
  },
  {
    id: 20,
    title: 'Mozzarella Combo (crunchy)',
    price: 890,
    category1: 'Non-veg',
    category2: 'crunchy',
    content: '2x mozzarella crunchy chicken burger, 2x soft drinks, 1x chicken fries, 1x mozzarella fries',
    image: `${mozzarellacombo}`,
  },
  {
    id: 17,
    title: 'Party Pack (Regular)',
    price: 1499,
    category1: 'Non-veg',
    category2: 'best seller',
    content: '6x regular chicken burger, 6x soft drinks, 3x chicken fries, 3 onion rings',
    image: `${familypack}`,
  },
  {
    id: 21,
    title: 'Iced Lemonade',
    price: 130,
    category1: 'drinks',
    category2: 'beverages',
    content: '1x Iced Lemonade',
    image: `${icedlemonade}`,
  },
  {
    id: 22,
    title: 'Mint Lemonade',
    price: 140,
    category1: 'drinks',
    category2: 'beverages',
    content: '1x Mint Lemonade',
    image: `${mintlemonade}`,
  },
  {
    id: 23,
    title: 'Virgin Mojito',
    price: 160,
    category1: 'drinks',
    category2: 'beverages',
    content: '1x Virgin Mojito',
    image: `${virginmojito}`,
  },
  {
    id: 24,
    title: 'Extra Virgin Mojito',
    price: 170,
    category1: 'drinks',
    category2: 'beverages',
    content: '1x Extra Virgin Mojito',
    image: `${extravigrinmojito}`,
  },


]
