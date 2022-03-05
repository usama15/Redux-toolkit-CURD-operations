import logo from './logo.svg';
import './App.css';
import Appbar from './Screens/AppBar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CreateCard from './Screens/CreateCard';
import DetailCard from './Screens/DetailCard';
import ViewCard from './Screens/ViewCard';

const App = () => {
  return (
    <Router >
      <Appbar />
      <Switch>
        <Route exact path='/' component={CreateCard} />
        <Route exact path='/DetailCard' component={DetailCard} />
        <Route exact path='/ViewCard' component={ViewCard} />
      
      </Switch>
    </Router>
  )
};
export default App;
