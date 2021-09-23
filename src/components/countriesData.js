import { v4 as uuidv4 } from 'uuid';
import mexico from '../maps/mexico.png';
import argentina from '../maps/argentina.png';
import brazil from '../maps/brazil.png';
import ecuador from '../maps/ecuador.png';
import panama from '../maps/panama.png';
import costaRica from '../maps/costaRica.png';

const countries = [
  {
    country: 'Mexico',
    capital: 'Mexico City',
    id: uuidv4(),
    img: mexico,
    className: 'mexico',
    index: 0,
    coord: {
      lat: 19.432608,
      lon: -99.133209,
    },
  },
  {
    country: 'Argentina',
    capital: 'Buenos Aires',
    id: uuidv4(),
    img: argentina,
    className: 'argentina',
    index: 1,
    coord: {
      lat: -34.603683,
      lon: -58.381557,
    },
  },
  {
    country: 'Ecuador',
    capital: 'Quito',
    id: uuidv4(),
    img: ecuador,
    className: 'ecuador',
    index: 2,
    coord: {
      lat: -0.180653,
      lon: -78.467834,
    },
  },
  {
    country: 'Brazil',
    capital: 'Brasilia',
    id: uuidv4(),
    img: brazil,
    className: 'brazil',
    index: 3,
    coord: {
      lat: -15.826691,
      lon: -47.921822,
    },
  },
  {
    country: 'Panama',
    capital: 'Panama City',
    id: uuidv4(),
    img: panama,
    className: 'panama',
    index: 4,
    coord: {
      lat: 8.9824,
      lon: -79.5199,
    },
  },
  {
    country: 'Costa Rica',
    capital: 'San Jose',
    id: uuidv4(),
    img: costaRica,
    className: 'costaRica',
    index: 5,
    coord: {
      lat: 9.9281,
      lon: 84.0907,
    },
  },
];

export default countries;
