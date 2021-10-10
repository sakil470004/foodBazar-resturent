import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import FoodDetals from './components/FoodDetals';
import Scroll from './components/Scroll';
import NotFound from "./components/NotFound";
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [],
      searchfield: ''
    }
  }



  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then(response => response.json()).then(users => users = users.meals)
      .then(users => { this.setState({ foods: users }) });



  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { foods, searchfield } = this.state;

    const filteredFoods = foods.filter(food => {
      return food.strMeal.toLowerCase().includes(searchfield.toLowerCase());
    })


    return !foods.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Router>
            <Switch>
              <Route path="/cardlist">
                <div className='tc'>
                  <h1 className='f1'>Food Bazar</h1>
                  <SearchBox searchChange={this.onSearchChange} />
                  <Scroll>
                    <CardList
                      foods={filteredFoods}
                    />
                  </Scroll>
                </div>
              </Route>
              <Route path="/food/:idMeal">
                <FoodDetals foods={filteredFoods}
                  name={foods}
                />

              </Route>
              <Route exact path="/">
                <div className='tc'>
                  <h1 className='f1'>Food Bazar</h1>
                  <SearchBox searchChange={this.onSearchChange} />

                  <Scroll>
                    <CardList
                      foods={filteredFoods}
                    />
                  </Scroll>
                </div>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      );
  }
}

export default App;
