import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Recipe = ({ dish, dishIsReady, onDishClicked }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={dish.image} />
    <Card.Body>
      <Card.Title>{dish.name}</Card.Title>
      <Card.Text>{dish.desc}</Card.Text>
      <Button variant="primary" onClick={() => onDishClicked(dish)}>
        {dishIsReady ? 'EAT!' : 'Prepare dish'}
      </Button>
    </Card.Body>
  </Card>
);

Recipe.propTypes = {
  dish: PropTypes.object.isRequired,
  dishIsReady: PropTypes.bool.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipe;
