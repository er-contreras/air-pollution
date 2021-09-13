import styles from '../styles/Forecast.module.css'

const Forecast = () => {
  return (
    <div>
      <div id={styles.searchContainer}>
        <div>Forecast</div>
        <input type="search"></input>
      </div>
      <div>
        <div className={styles.reference}>
          <div className={styles.mexico}></div>
          <h2>Latin American</h2>
        </div>
      </div>
    </div>
  )
}

export default Forecast;