import styles from './CountriesList.module.css'

const CountriesList = ({countries}) => {
  return <div>
    
    <div className={styles.heading}>
      <button className={styles.heading_name}>
        <div>Name</div>
      </button>

      <button className={styles.heading_population}>
        <div>Population</div>
      </button>
    </div>

    {countries.map(c => <div className={styles.row}>
      <div className={styles.name}>{c.name}</div>
      <div className={styles.population}>{c.population}</div>
    </div>)}
  </div>
}

export default CountriesList;