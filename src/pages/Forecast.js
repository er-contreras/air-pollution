import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'; // eslint-disable-line
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/Forecast.module.css';
// import { getAQIThunk } from '../components/apiManager';
import countries from '../components/countriesData';

const Forecast = () => {
  // const dispatch = useDispatch();
  // const details = useSelector((store) => store.details); //eslint-disable-line

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

  // useEffect(() => {
  //   dispatch(getAQIThunk());
  // }, []);

  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Air Pollution</div>
        <input
          id="input"
          type="search"
          placeholder="by category"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <FontAwesomeIcon className={styles.micro} icon={faMicrophone} />
        <FontAwesomeIcon className={styles.cog} icon={faCog} />
      </div>

      <div>
        <div className={styles.reference}>
          <div className={styles.latinAmerica} />
          <h2>Latin American Air Pollution</h2>
        </div>
      </div>

      <div className={styles.stats}>AIR POLLUTION INDEX BY COUNTRY</div>

      <div id={styles.countries}>
        {search(countries).map((obj) => (
          <Link
            key={obj.id}
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
              <img
                className={styles.country}
                alt={obj.country}
                src={obj.img}
              />
              <h2>{obj.country}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
