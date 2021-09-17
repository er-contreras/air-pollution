import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Forecast.module.css';
import { getAQIThunk } from '../components/apiManager';
import countries from '../components/countriesData';

const Forecast = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details); //eslint-disable-line

  const [q, setQ] = useState('');

  const [searchParam] = useState(['country']);

  function search(items) {
    return items.filter((item) => (
      searchParam.some((newItem) => (
        item[newItem]
          .toString()
          .toLowerCase()
          .indexOf(q.toLowerCase()) > -1
      ))
    ));
  }

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Air Pollution</div>
        <input
          id="input"
          type="search"
          placeholder="by category"
          value={q}
          onChange={(e) => setQ(e.target.value)}
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
          <a
            key={obj.id}
            href="http://localhost:3000/#/details"
            onClick={() => {
              console.log(obj.img, obj.country);
              return obj.img;
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
          </a>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
