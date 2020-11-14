import Recipe from './Recipe';
import PropTypes from 'prop-types';
import { CardColumns } from 'react-bootstrap';

const Recipes = ({ title, dishes, dishIsReady, onDishClicked }) => {
  return (
    <>
      <h4>{title}</h4>
      <CardColumns>
        {dishes.map(dish => (
          <Recipe
            key={dish.id}
            dish={dish}
            dishIsReady={dishIsReady}
            onDishClicked={onDishClicked}
          />
        ))}
      </CardColumns>
    </>
  );
};

Recipes.propTypes = {
  title: PropTypes.string.isRequired,
  dishes: PropTypes.array.isRequired,
  dishIsReady: PropTypes.bool.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipes;
