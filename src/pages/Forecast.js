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

  const showFilteredCountry = (id) => {
    console.log('Almost there', id);
  };

  const filterCountryByName = () => {
    const country = document.getElementById('input');
    console.log(country.value);
    if (country.value === 'Mexico') {
      showFilteredCountry(1);
    }
  };

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
        {countries.map((obj) => {
          if (obj.country) {
            return (
              <>
                <a
                  key={obj.id}
                  href="http://localhost:3000/#/details"
                  onClick={() => console.log('Hi htere!', obj.id)}
                >
                  <div
                    className={[0, 3, 4, 7].includes(obj.index)
                      ? styles.countriesContainer
                      : styles.countriesContainer2}
                  >
                    <img className={styles.country} alt={obj.country} src={obj.img} />
                    <h2>{obj.country}</h2>
                  </div>
                </a>
              </>
            );
          }
          return false;
        })}
      </div>
    </div>
  );
};
export default Forecast;
