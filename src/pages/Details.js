import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  faChevronLeft, faMicrophone, faCog, faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { getAQIThunk } from '../components/apiManager';
import styles from '../styles/Details.module.css';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);

  const location = useLocation();
  const frontEnd = location.state;
  const { coord } = frontEnd;

  useEffect(() => {
    dispatch(getAQIThunk(coord.lat, coord.lon));
  }, []);

  return (
    <div>
      <div id={styles.searchContainer}>
        <Link to="/">
          <FontAwesomeIcon className={styles.arrow} icon={faChevronLeft} />
        </Link>
        <input
          id={styles.input}
          type="search"
          placeholder="Components"
        />
        <div className={styles.icons}>
          <FontAwesomeIcon className={styles.micro} icon={faMicrophone} />
          <FontAwesomeIcon className={styles.cog} icon={faCog} />
        </div>
      </div>

      {details[1]?.[1].map((arr) => {
        const keys = Object.keys(arr.components);
        const values = Object.values(arr.components);
        const { aqi } = arr.main;
        const date = arr.dt;
        const time = new Date(date * 1000);

        return (
          <div key={uuidv4()}>
            <div className={styles.country}>
              <img className={styles.map} src={frontEnd.img} alt="country" />
              <div>
                <h2>{frontEnd.name}</h2>
                <h3>
                  Air Quality index
                  <span>{`(${aqi})`}</span>
                </h3>
              </div>
            </div>
            <div
              className={styles.componentsDescript}
            >
              Air Pollution Components
              <span>
                -
                {time.toDateString()}
              </span>
            </div>

            <div id={styles.components} key={uuidv4()}>
              <div id={styles.keys}>
                {keys.map((key) => (
                  <div className={styles.keys} key={uuidv4()}>
                    <li
                      key={uuidv4()}
                    >
                      {key}
                    </li>
                  </div>
                ))}
              </div>

              <div id={styles.values}>
                {values.map((value) => (
                  <div className={styles.values} key={uuidv4()}>
                    <li
                      key={uuidv4()}
                    >
                      {value}
                    </li>
                    <FontAwesomeIcon className={styles.rightArrow} icon={faArrowAltCircleRight} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
