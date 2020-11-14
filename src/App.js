import MyKitchen from './MyKitchen';
import { Container, Jumbotron } from 'react-bootstrap';
import './App.css';

const App = () => (
  <>
    <Jumbotron>
      <h3>My Kitchen app</h3>
    </Jumbotron>
    <Container>
      <MyKitchen />
    </Container>
  </>
);

export default App;
