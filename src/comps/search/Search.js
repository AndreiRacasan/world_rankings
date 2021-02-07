import SearchRounded from '@material-ui/icons/SearchRounded'
import styles from './Search.module.css'

const Search = ({...r}) => {
  return <div className={styles.wrapper}>
    <SearchRounded color="inherit" />
    <input className={styles.input} {...r} />
  </div>
}

export default Search;