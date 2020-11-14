import { useState } from 'react';
import { dishesStore } from './dishesStore';
import Recipes from './Recipes';

const MyKitchen = () => {
  const [dishes, setDishes] = useState(dishesStore);

  const prepareDishes = dishes.filter(d => d.ready === 0);
  const readyDishes = dishes.filter(d => d.ready === 1);

  const handleDishClick = dishId => {
    let dish = dishes.find(d => d.id === dishId);
    dish.ready = dish.ready > 0 ? (dish.ready -= 1) : (dish.ready += 1);
    setDishes(prevState => prevState.map(d => (d.id === dishId ? dish : d)));
  };

  return (
    <>
      {prepareDishes.length > 0 && (
        <Recipes
          title="Prepare your dish:"
          dishes={prepareDishes}
          onDishClicked={handleDishClick}
        />
      )}
      {readyDishes.length > 0 && (
        <Recipes
          title="Ready to eat:"
          dishes={readyDishes}
          onDishClicked={handleDishClick}
        />
      )}
    </>
  );
};

export default MyKitchen;
