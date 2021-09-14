import styles from '../styles/Forecast.module.css'

const Forecast = () => {
  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Forecast</div>
        <input type="search" placeholder="air pollution" />
      </div>
      <div>
        <div className={styles.reference}>
          <div className={styles.mexico}></div>
          <h2>Latin American</h2>
        </div>
      </div>
      <div className={styles.stats}>STATS BY COUNTRY</div>
    </div>
  )
}

export default Forecast;