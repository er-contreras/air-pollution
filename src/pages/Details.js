import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getAQIThunk } from '../components/apiManager';
import styles from '../styles/Details.module.css';
// import countries from '../components/countriesData';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);

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
        // onChange={() => filterCountryByName()}
        />
      </div>
      <div>Selected Country</div>
      <div className={styles.componentsDescript}> Air Pollution Components</div>

      {details[1]?.[1].map((arr) => {
        const components = Object.keys(arr.components);
        const values = Object.values(arr.components);

        return (
          <ul id={styles.components} key={uuidv4()}>
            <div className={styles.keys}>
              {components.map((component) => (
                <li className={styles.key} key={uuidv4()}>{component}</li>
              ))}
            </div>

            <div className={styles.values}>
              {values.map((value) => (
                <li className={styles.value} key={uuidv4()}>{value}</li>
              ))}
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Details;
