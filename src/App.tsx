import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/carts/Cart';
import Home from './components/home/Home';
import Navbar from './components/home/Navbar';
import Product from './components/products/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <Navbar />
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/cart" component={Cart} />
        <Route path="/product" component={Product} />
      </Switch>
      </header>
    </Router>
    </div>
  );
}

export default App;