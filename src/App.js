import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Navbar from './components/layout/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/Home/HomePage';
import ProductSinglePage from './views/Product/ProductSinglePage';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter', 'Playfair Display']
      }
    })
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/product">
            <ProductSinglePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
