import { createSlice } from "@reduxjs/toolkit";

const italianMeals = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Traditional Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
    price: 12.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description:
      "Spaghetti served with a rich and meaty tomato sauce with ground beef and parmesan cheese",
    price: 11.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg",
  },
  {
    id: 3,
    name: "Lasagna",
    description:
      "Layered pasta with beef, tomato sauce, and a blend of mozzarella and parmesan cheese",
    price: 14.99,
    rating: 4.7,
    quantity: 0,
    imageUrl:
      "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description: "Creamy fettuccine pasta with parmesan cheese and butter",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg",
  },
  {
    id: 5,
    name: "Chicken Parmesan",
    description:
      "Breaded chicken topped with tomato sauce and melted mozzarella cheese, served with spaghetti",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://easychickenrecipes.com/wp-content/uploads/2022/01/Featured-Fried-Chicken-Parmesan-1.jpg",
  },
];
const indianMeals = [
  {
    id: 1,
    name: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based sauce, served with rice or naan bread",
    quantity: 0,
    price: 12.99,
    rating: 4.5,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/_yZgZlxc5yH5cDZAVa_oICIokkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg",
  },
  {
    id: 2,
    name: "Chana Masala",
    description:
      "Spicy and tangy chickpea dish cooked with onion, tomato, and Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 10.99,
    rating: 4.2,
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2021/01/chana-masala-3-768x877.jpg",
  },
  {
    id: 3,
    name: "Saag Paneer",
    description:
      "Soft Indian cheese cubes cooked in a creamy spinach sauce, served with rice or naan bread",
    quantity: 0,
    price: 11.99,
    rating: 4.3,
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg?quality=90&webp=true&resize=440,400",
  },
  {
    id: 4,
    name: "Aloo Gobi",
    description:
      "Cauliflower and potatoes cooked with Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 9.99,
    rating: 4.1,
    imageUrl:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-may/Aloo_Gobi_Sabzi_Recipe-4.jpg",
  },
  {
    id: 5,
    name: "Biryani",
    description:
      "Flavorful rice dish cooked with your choice of chicken, lamb, or vegetables and Indian spices, served with raita and papadum",
    quantity: 0,
    price: 13.99,
    rating: 4.4,
    imageUrl:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
  },
];
const japanesemeals = [
  {
    id: 1,
    name: "Sushi Combo",
    description:
      "A combination of 8 pieces of sushi and 1 roll, served with miso soup and salad",
    price: 18.99,
    rating: 4.6,
    quantity: 0,
    imageUrl: "https://m.media-amazon.com/images/I/71u6Gscwy4L._SX522_.jpg",
  },
  {
    id: 2,
    name: "Tempura Udon",
    description:
      "Thick noodles in a hot broth with deep-fried shrimp and vegetables, served with tempura dipping sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.honestfoodtalks.com/wp-content/uploads/2021/12/Tempura-udon-recipe-including-slices-of-seaweed-chopped-scallions-and-narutomaki-500x500.jpg",
  },
  {
    id: 3,
    name: "Beef Teriyaki",
    description:
      "Grilled steak glazed with teriyaki sauce, served with rice and steamed vegetables",
    price: 16.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "http://images.summitmedia-digital.com/yummyph/images/2021/07/08/beefteriyakirecipe2.jpg",
  },
  {
    id: 4,
    name: "Okonomiyaki",
    description:
      "Japanese savory pancake with cabbage, pork, shrimp, and topped with a variety of sauces",
    price: 10.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1200px-Okonomiyaki_001.jpg",
  },
  {
    id: 5,
    name: "Chicken Katsu Curry",
    description:
      "Breaded and deep-fried chicken cutlet served with a rich curry sauce and rice",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://images.kitchenstories.io/wagtailOriginalImages/R2498-final-photo-_0.jpg",
  },
];
const frenchMeals = [
  {
    id: 1,
    name: "Coq au Vin",
    description:
      "Braised chicken in red wine sauce, with bacon, mushrooms, and pearl onions",
    price: 17.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1404919272117.jpeg",
  },
  {
    id: 2,
    name: "Steak Frites",
    description:
      "Grilled sirloin steak served with French fries and herb butter",
    price: 19.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://images.food52.com/-jxHBleXv6CRl_mIZfO_bUzeK_Q=/660x440/filters:format(webp)/52096452-f9c1-49e9-9e76-46c694bee2ba--2020-1124_steak-frites_3x2_rocky-luten_032.jpg",
  },
  {
    id: 3,
    name: "Quiche Lorraine",
    description:
      "Classic savory quiche with bacon, cheese, and cream custard filling",
    price: 12.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://media.houseandgarden.co.uk/photos/6189479a8373470f8394e2e1/master/w_1600,c_limit/mary-berry-vogue-2-25jun13-pr_bt.jpg",
  },
  {
    id: 4,
    name: "Bouillabaisse",
    description:
      "Traditional fish soup with a variety of fish, shellfish, and vegetables, served with bread and rouille",
    price: 22.99,
    rating: 4.6,
    quantity: 0,
    imageurl:
      "https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_1600,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg",
  },
  {
    id: 5,
    name: "Ratatouille",
    description:
      "Vegetable stew with eggplant, zucchini, peppers, and tomatoes, served with bread",
    price: 13.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.allrecipes.com/thmb/B7pwC3xXpocRpwJfkPmDk9_A3nM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222006-disneys-ratatouille-ddmfs-4x3-0747-631622b05b4e4bd196b037aed1c9f776.jpg",
  },
];
const chineseMeals = [
  {
    id: 1,
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.seriouseats.com/thmb/DHg5hjHYjFKaRCIA2L2eShTDjlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
  },
  {
    id: 2,
    name: "Beef and Broccoli",
    description:
      "Stir-fried beef and broccoli in a savory brown sauce, served with steamed rice",
    price: 11.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.sprinklesandsprouts.com/wp-content/uploads/2021/03/Beef-and-Broccoli-Square.jpg",
  },
  {
    id: 3,
    name: "Shrimp Fried Rice",
    description: "Fried rice with shrimp, peas, carrots, and egg",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Shrimp-Fried-Rice-main-1.jpg",
  },
  {
    id: 4,
    name: "Wonton Soup",
    description:
      "Clear broth soup with wonton dumplings, vegetables, and sliced pork",
    price: 8.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
  },
  {
    id: 5,
    name: "Egg Rolls",
    description: "Crispy fried egg rolls with vegetables and meat filling",
    price: 6.99,
    rating: 4.0,
    quantity: 0,
    imageurl:
      "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
  },
];
const initialList = [
  {
    uuid: "4a2ccf05-0db5-4c5a-bcaf-aa5c0b688bee",
    name: "The Golden Spoon",
    location: "New York, NY",
    type: "Italian",
    rating: 4,
    imageUrl:
      "https://thumbs.dreamstime.com/z/pizza-tasty-homemade-chicken-42870527.jpg",
    description:
      "Our menu typically features a wide range of traditional Italian dishes, including antipasti, pasta, pizza, seafood, meat, and dessert options.",
    country: italianMeals,
  },
  {
    uuid: "2d2ce0f8-747b-4371-a71f-ec88ac9c0d97",
    name: "Spice of India",
    location: "San Francisco, CA",
    type: "Indian",
    rating: 5,
    imageUrl:
      "https://recipesinhindi.net/wp-content/uploads/2018/02/Chhole-Bhature14334.jpg",
    description:
      "Our Indian restaurant restaurant is a culinary destination that offers a variety of dishes inspired by the diverse cuisine of India. Indian restaurants are known for their aromatic spices, vibrant colors, and bold flavors that provide a sensory experience for diners.",
    country: indianMeals,
  },
  {
    uuid: "d146c5e5-1f5c-4e49-bdd5-cd7ce541f116",
    name: "Sushi House",
    location: "Los Angeles, CA",
    type: "Japanese",
    rating: 3,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spicy-crab-rolls4-1654808938.jpg?crop=1.00xw:0.752xh;0,0.142xh&resize=980:*",
    description:
      "Our menu typically includes a wide range of traditional japanese dishes, including sushi, sashimi, tempura, ramen, udon, soba noodles, and more. Japanese cuisine also features a variety of small plates and appetizers, such as edamame, gyoza, and tempura vegetables.",
    country: japanesemeals,
  },
  {
    uuid: "e2db2c27-00f5-42e7-9d80-955f9878e0d6",
    name: "Le Bistro Français",
    location: "Chicago, IL",
    type: "French",
    rating: 4,
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/220530155153-07-a-classic-french-dishes-escargots-de-bourgogne-restricted.jpg?c=original",
    description:
      "Our menu features a wide range of traditional French dishes, such as escargots, foie gras, coq au vin, beef bourguignon, and other classic dishes that reflect the diverse culinary regions of France.",
    country: frenchMeals,
  },
  {
    uuid: "f757af8a-450c-4a0a-9c48-f8588d0cdd70",
    name: "Chinese Garden",
    location: "Boston, MA",
    type: "Chinese",
    rating: 3,
    imageUrl:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    description:
      "Our menu features a wide range of dishes, from savory dim sum and noodle soups to rich and flavorful stir-fries and seafood dishes. Chinese cuisine is also known for its use of various cooking techniques, including stir-frying, steaming, boiling, and braising, which help to create complex and distinct flavors",
    country: chineseMeals,
  },
];

const appDataSlice = createSlice({
  name: "restaurent",
  initialState: {
    restaurantList: initialList,
    cartItems: [],
    mealsCountry: undefined,
    myOrderList:[],
    restaurantName:undefined,
  },
  reducers: {
    increment(state, action) {
      const order = action.payload.item;
      console.log(order);
      state.restaurantName = action.payload.name;
      const mealsItemIdx=state.mealsCountry.country.findIndex((item)=>item.id===order.id);
      state.mealsCountry.country[mealsItemIdx].quantity++;
      const exisitingItem = state.cartItems.find(
        (item) => item.id === order.id
        
      );
      if (!exisitingItem) {
        state.cartItems.push({
          id: order.id,
          name: order.name,
          description: order.description,
          price: order.price,
          rating: order.rating,
          quantity: 1,
          imageurl: order.imageUrl,
        });
        
      } else {
        const exisitingItemIdx = state.cartItems.findIndex(
          (item) => item.id === exisitingItem.id
        );
        state.cartItems[exisitingItemIdx].quantity++;
      }
    },

    addItemsToMyOrderList(state,action){
      const orderArr=action.payload.myorderArr;
      const restaurantName = action.payload.name;
      const orderDate = action.payload.date;
      const orderAmount=action.payload.amount;
      state.myOrderList.push({name:restaurantName,date:orderDate,amount:orderAmount,arr:orderArr});
      state.cartItems=[];
      console.log(state.myOrderList);
    },
    mealsCountrySet(state, action) {
      const response = action.payload;
      console.log(response);
      state.mealsCountry = response;
      state.cartItems=[];
    },
    decrement(state, action) {
      const outOrder = action.payload;
      const newObjIndx = state.mealsCountry.country.findIndex((obj) => obj.id === outOrder.id);
      if (outOrder.quantity < 2) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== outOrder.id
        );
      } else {
        const outOrderIdx = state.cartItems.findIndex(
          (item) => item.id === outOrder.id
        );
        console.log(3, state.cartItems);
        state.cartItems[outOrderIdx].quantity--;
       
      }
      if (state.mealsCountry.country[newObjIndx].quantity === 0) {
        state.mealsCountry.country[newObjIndx].quantity = 0;
      } else {
        state.mealsCountry.country[newObjIndx].quantity -= 1;
      }
    },
  },
});
export default appDataSlice;
export const appDataAction = appDataSlice.actions;
