import Head from 'next/head'
import {useState} from 'react'
import CountriesList from '../comps/CountriesList/CountriesList'
import Layout from '../comps/layout/Layout'
import Search from '../comps/search/Search'
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  console.log(countries);

  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(keyword) || 
    c.region.toLowerCase().includes(keyword) || 
    c.subregion.toLowerCase().includes(keyword));

  const onInputChange = (e) => {
    e.preventDefault();
    
    setKeyword(e.target.value.toLowerCase());
  }


  return <Layout>
    
    <div className={styles.counts}>
      Found {countries.length} countries
    </div>

    <Search placeholder="Filter by various criteria..." onChange={onInputChange} />

    <CountriesList countries={filteredCountries} />

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
