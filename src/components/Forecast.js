import { faMicrophone, faCog, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Forecast.module.css';
import countries from './countriesData';

const Forecast = () => {
  const [searchBar, setSearchBar] = useState('');
  const [searchParam] = useState(['country']);

  function search(items) {
    return items.filter((item) => (
      searchParam.some((newItem) => (
        item[newItem]
          .toString()
          .toLowerCase()
          .indexOf(searchBar.toLowerCase()) > -1
      ))
    ));
  }

  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Current Air Pollution</div>
        <input
          id={styles.input}
          type="search"
          placeholder="By Country..."
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <div>
          <FontAwesomeIcon className={styles.micro} icon={faMicrophone} />
          <FontAwesomeIcon className={styles.cog} icon={faCog} />
        </div>
      </div>

      <div>
        <div className={styles.reference}>
          <div className={styles.latinAmerica} />
          <h2>Latin American Air Pollution</h2>
        </div>
      </div>

      <div className={styles.stats}>AIR POLLUTION INDEX BY COUNTRY</div>

      <div id={styles.countries}>
        {search(countries).map((obj, index) => (
          <div className={styles.container} key={uuidv4()}>
            <Link
              data-testid={`link-${index}`}
              to={{
                pathname: '/details',
                state: {
                  img: obj.img,
                  name: obj.country,
                  coord: obj.coord,
                },
              }}
            >
              <div
                className={[0, 3, 4, 7].includes(obj.index)
                  ? styles.countriesContainer
                  : styles.countriesContainer2}
              >
                <div className={styles.countryImg}>
                  <img
                    className={styles.country}
                    alt={obj.country}
                    src={obj.img}
                  />
                  <div className={styles.circleRight}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </div>
                </div>
                <div>
                  <h2 className={styles.capital}>
                    <div>{obj.country}</div>
                    <div>{`(${obj.capital})`}</div>
                  </h2>
                  <div className={styles.coord}>
                    <div>{`Lat : ${obj.coord.lat}`}</div>
                    <div>{`Lon : ${obj.coord.lon}`}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
