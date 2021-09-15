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
    id: uuidv4(),
    img: mexico,
    className: 'mexico',
    index: 0,
  },
  {
    country: 'Argentina',
    id: uuidv4(),
    img: argentina,
    className: 'argentina',
    index: 1,
  },
  {
    country: 'Ecuador',
    id: uuidv4(),
    img: ecuador,
    className: 'ecuador',
    index: 2,
  },
  {
    country: 'Brazil',
    id: uuidv4(),
    img: brazil,
    className: 'brazil',
    index: 3,
  },
  {
    country: 'Panama',
    id: uuidv4(),
    img: panama,
    className: 'panama',
    index: 4,
  },
  {
    country: 'Costa Rica',
    id: uuidv4(),
    img: costaRica,
    className: 'costaRica',
    index: 5,
  },
];

export default countries;
