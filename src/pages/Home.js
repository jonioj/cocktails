import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import axios from 'axios';

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('a');
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
