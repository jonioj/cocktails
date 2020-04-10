import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('margarita');
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          console.log('drink');
        } else {
          console.log('no drinks');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
