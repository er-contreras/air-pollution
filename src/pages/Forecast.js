import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Forecast.module.css';
import { getAQIThunk } from '../components/apiManager';

const Forecast = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);

  console.log(details.coord);

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Air Pollution</div>
        <input type="search" placeholder="by category" />
      </div>

      <div>
        <div className={styles.reference}>
          <div className={styles.latinAmerica} />
          <h2>Latin American Air Pollution</h2>
        </div>
      </div>

      <div className={styles.stats}>AIR POLLUTION INDEX BY COUNTRY</div>

      <div id={styles.categories}>
        <div className={styles.category}>
          <div className={styles.mexico} />
          <h2>Mexico</h2>
        </div>

        <div className={styles.category}>
          <div className={styles.argentina} />
          <h2>Argentina</h2>
        </div>

        <div className={styles.category}>
          <div className={styles.ecuador} />
          <h2>Ecuador</h2>
        </div>

        <div className={styles.category}>
          <div className={styles.brazil} />
          <h2>Brazil</h2>
        </div>
      </div>
    </div>
  );
};
export default Forecast;
