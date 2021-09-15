import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Forecast.module.css';
import { getAQIThunk } from '../components/apiManager';
import countries from '../components/countriesData';

const Forecast = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  const filterCountryByName = () => {
    const country = document.getElementById('input');
    console.log(country.value);
    if (country.value === 'Mexico') {
      console.log('Hello');
    }
  };

  // const showFilteredCountry = () => {

  // }

  console.log(details.coord?.lon);

  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Air Pollution</div>
        <input
          id="input"
          type="search"
          placeholder="by category"
          onChange={() => filterCountryByName()}
        />
      </div>

      <div>
        <div className={styles.reference}>
          <div className={styles.latinAmerica} />
          <h2>Latin American Air Pollution</h2>
        </div>
      </div>

      <div className={styles.stats}>AIR POLLUTION INDEX BY COUNTRY</div>

      <div id={styles.countries}>
        {countries.map((obj) => (
          <div
            className={obj.index === 0 || obj.index === 3 || obj.index === 4
              ? styles.countriesContainer
              : styles.countriesContainer2}
            key={obj.id}
          >
            <img className={styles.country} alt={obj.country} src={obj.img} />
            <h2>{obj.country}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
