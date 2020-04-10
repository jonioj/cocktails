import React from 'react';
import { useParams } from 'react-router-dom';
import Cocktail from '../components/Cocktail';

export default function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCockatail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await response.json();
        setLoading(false);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            stroAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch {}
      setLoading(false);
    }
    getCockatail();
  }, [id]);
  console.log(cocktail);
  if (loading) {
    return <h2 className="section-title">Loading ...</h2>;
  }
  if (!cocktail) {
    return <h2>No cocktail</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
    } = cocktail;
  }
  return <h1>{cocktail.name}</h1>;
}
