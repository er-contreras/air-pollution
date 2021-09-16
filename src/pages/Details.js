import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getAQIThunk } from '../components/apiManager';
import styles from '../styles/Details.module.css';
// import countries from '../components/countriesData';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);
  // const coordenates = details.coord;

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  // console.log(details[1]?.[1][0].components);

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

      {/* {Object.values(details[1][1]).map((arr) => ( */}
      {details[1]?.[1].map((arr) => {
        const components = Object.keys(arr.components);
        const values = Object.values(arr.components);
        console.log(values);

        return (
          <ul id={styles.components} key={uuidv4()}>
            {components.map((component) => (
              <li key={uuidv4()}>{component}</li>
            ))}

            {values.map((value) => (
              <li key={uuidv4()}>{value}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default Details;
