import Head from 'next/head'
import CountriesList from '../comps/CountriesList/CountriesList';
import Layout from '../comps/layout/Layout'
import Search from '../comps/search/Search'
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  console.log(countries);
  return <Layout>
    
    <div className={styles.counts}>
      Found {countries.length} countries.
    </div>

    <Search placeholder="Filter by various criteria..." />

    <CountriesList countries={countries} />

  </Layout>;
};

export const getStaticProps = async () => {

  const response = await fetch('https://restcountries.eu/rest/v2');
  const countries = await response.json();

  return {
    props: { 
      countries
    }
  }
}
