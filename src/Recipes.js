import Recipe from './Recipe';
import PropTypes from 'prop-types';
import { CardColumns } from 'react-bootstrap';

const Recipes = ({ title, dishes, onDishClicked }) => {
  return (
    <>
      <h4>{title}</h4>
      <CardColumns>
        {dishes.map(dish => (
          <Recipe
            key={dish.id}
            dishId={dish.id}
            dishName={dish.name}
            dishDesc={dish.desc}
            dishImage={dish.image}
            dishReady={dish.ready}
            onDishClicked={onDishClicked}
          />
        ))}
      </CardColumns>
    </>
  );
};

Recipes.propTypes = {
  dishes: PropTypes.array.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipes;
