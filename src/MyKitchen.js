import { useState } from 'react';
import { dishesStore } from './dishesStore';
import Recipes from './Recipes';

const MyKitchen = () => {
  const [recipes, setRecipes] = useState(dishesStore);
  const [readMeals, setReadyMeals] = useState([]);

  const handleDishClick = dish => {
    // if the clicked dish is currently exists in the recipes array
    if (recipes.includes(dish)) {
      // add it to the readMeals array
      setReadyMeals([...readMeals, dish]);

      // remove it from the recipes array
      setRecipes(prevState => prevState.filter(d => d.id !== dish.id));
    }

    // if the clicked dish is ready
    else {
      // add it to the recipes array
      setRecipes([...recipes, dish]);

      // remove it from the recipes array
      setReadyMeals(prevState => prevState.filter(d => d.id !== dish.id));
    }
  };

  return (
    <>
      {recipes.length > 0 && (
        <Recipes
          title="Prepare your dish"
          dishes={recipes}
          dishIsReady={false}
          onDishClicked={handleDishClick}
        />
      )}
      {readMeals.length > 0 && (
        <Recipes
          title="Ready to eat"
          dishes={readMeals}
          dishIsReady={true}
          onDishClicked={handleDishClick}
        />
      )}
    </>
  );
};

export default MyKitchen;
