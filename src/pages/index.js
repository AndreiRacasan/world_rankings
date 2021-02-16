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
    <div className={styles.input_container}>
      <div className={styles.counts}>
        Fetched data from {countries.length} countries
      </div>

      <div className={styles.input}>
       <Search placeholder="Search by country name, continent or region" onChange={onInputChange} />
      </div>
    </div>
    
    <div className={styles.description}>
        Click on the relevant column title to order the countries by name, population, area or gini.
    </div>
    
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
