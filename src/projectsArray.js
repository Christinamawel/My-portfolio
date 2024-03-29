import mrRoboger from "./img/mr-roboger-icon.png";
import roboGif from './img/mr.roboger.gif';
import ticCatToe from './img/tic-cat-toe.jpg';
import ticCatToeGif from './img/tic-cat-toe.gif';
import indecision from './img/indecision.jpg';
import indecisionGif from './img/indecision.gif';
import sodaShop from './img/soda-shop.jpg';
import sodaShopGif from './img/soda-shop.gif';
import maynooth from './img/maynooth.jpg';
import maynoothGif from './img/maynooth.gif';

const projectsArray = [
  {
    name: 'Tic Cat Toe',
    img: ticCatToe,
    detailImg: ticCatToeGif,
    link: 'https://jlewilson.github.io/tic-cat-toe/',
    description: 'Tic tac toe game made while pair programming using React with Redux.',
    id: 0
  },
  {
    name: 'Escape from Mr.robogers Neighborhood',
    img: mrRoboger,
    detailImg: roboGif,
    link: 'https://jlewilson.github.io/Escape_from_Mr.Robogers_Neighborhood/',
    description: 'An Rpg Game built with a group of 4 peers. It was made using JavaScrpit canvas, Jquery, CSS, and HTML.',
    id: 1
  },
  {
    name: 'Indecision',
    img: indecision,
    detailImg: indecisionGif,
    link: 'https://github.com/Christinamawel/indecision',
    description: 'An Android mobile app made using Kotlin. Helps a user make a decision by randomizing an answer from multiple options. Incorporates firebase for saving capabilities and user authentication.',
    id: 2
  },
  {
    name: "Suzy's Soda Shop",
    img: sodaShop,
    detailImg: sodaShopGif,
    link: 'https://christinamawel.github.io/React-soda-fountain/',
    description: 'A simple React app with full create, read, update, delete, functionality. It features hand made visuals of soda fountains which update dynamically with the soda quantity.',
    id: 3
  },
  {
    name: 'Maynooth Store Mockup',
    img: maynooth,
    detailImg: maynoothGif,
    link: 'no link',
    description: 'Mockup of a furniture shopping website made using AdobeXD.',
    id: 4
  },
]

export default projectsArray;