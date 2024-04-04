import appe1 from "./images/menu/BURRATAAppetizer.jpg";
import appe2 from "./images/menu/Melonandhamappetizer.jpg";
import appe3 from "./images/menu/Melonandshrimpappetizer.jpg";
import main1 from "./images/menu/chicken-breast.jpg";
import main2 from "./images/menu/chicken-with-baked-in-potatoes.jpg";
import main3 from "./images/menu/duck-with-plum.jpg";
import main4 from "./images/menu/fish-with-stewed-vegetables.jpeg";
import main5 from "./images/menu/ramen-soup-with-duck-meat.jpg";
import main6 from "./images/menu/salmon-with-horseradish.jpg";
import des1 from "./images/menu/Strawberrycoctail.jpg";
import des2 from "./images/menu/Tiramisu.jpg";

const menu = [
  {
    type: "appetizer",
    name: "Burrata",
    image: appe1,
    price: "$7.99",
  },
  {
    type: "appetizer",
    name: "Melon and ham",
    image: appe2,
    price: "$7.99",
  },
  {
    type: "appetizer",
    name: "Melon and shrimp",
    image: appe3,
    price: "$7.99",
  },
  {
    type: "main",
    name: "Chicken breast and spinach roulades in cheese sauce",
    image: main1,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Chicken with baked in potatoes",
    image: main2,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Duck with plum sauce",
    image: main3,
    price: "$14.99",
  },
  {
    type: "main",
    name: "Fish with stewed vegetables",
    image: main4,
    price: "$11.99",
  },
  {
    type: "main",
    name: "Ramen soup with duck meat",
    image: main5,
    price: "$12.99",
  },
  {
    type: "main",
    name: "Salmon with horseradish sauce on grilled vegetables",
    image: main6,
    price: "$12.99",
  },
  {
    type: "dessert",
    name: "Strawberry coctail",
    image: des1,
    price: "$4.99",
  },
  {
    type: "dessert",
    name: "Tiramisu",
    image: des2,
    price: "$5.99",
  },
];

export default menu;
