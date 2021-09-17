import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { faChevronLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAQIThunk } from '../components/apiManager';
import styles from '../styles/Details.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(getAQIThunk());
  }, []);

  return (
    <div>
      <div id={styles.searchContainer}>
        <a href="http://localhost:3000/#/">
          <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} />
        </a>
        <input
          id="input"
          type="search"
          placeholder="by component"
        />
        <FontAwesomeIcon className={styles.micro} icon={faMicrophone} />
        <FontAwesomeIcon className={styles.cog} icon={faCog} />

      </div>
      <div>Selected Country</div>
      <div className={styles.componentsDescript}> Air Pollution Components</div>

      {details[1]?.[1].map((arr) => {
        const keys = Object.keys(arr.components);
        const values = Object.values(arr.components);

        return (
          <div id={styles.components} key={uuidv4()}>
            <div id={styles.keys}>
              {keys.map((key) => (
                <li
                  key={uuidv4()}
                >
                  {key}
                </li>
              ))}
            </div>

            <div id={styles.values}>
              {values.map((value) => (
                <li
                  key={uuidv4()}
                >
                  {value}
                </li>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
