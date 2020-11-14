import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Recipe = ({
  dishId,
  dishName,
  dishDesc,
  dishImage,
  dishReady,
  onDishClicked,
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={dishImage} />
    <Card.Body>
      <Card.Title>{dishName}</Card.Title>
      <Card.Text>{dishDesc}</Card.Text>
      <Button variant="primary" onClick={() => onDishClicked(dishId)}>
        {dishReady ? 'EAT!' : 'Prepare dish'}
      </Button>
    </Card.Body>
  </Card>
);

Recipe.propTypes = {
  dishId: PropTypes.number.isRequired,
  dishName: PropTypes.string.isRequired,
  dishDesc: PropTypes.string,
  dishImage: PropTypes.string.isRequired,
  dishReady: PropTypes.number.isRequired,
  onDishClicked: PropTypes.func.isRequired,
};

export default Recipe;
