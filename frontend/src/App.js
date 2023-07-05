import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
            <PrivateRoute component={HomePage} exact path="/" />
            <Route component={LoginPage} path="/login" />
      </Router>
    </div>
  );
}

export default App;
