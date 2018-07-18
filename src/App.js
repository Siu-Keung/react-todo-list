import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUnit from './components/AddUnit'
import ListUnit from './components/ListUnit'
import FilterUnit from "./components/FilterUnit";
import './todo.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h2>Jquery To Do List</h2>
                    <p>
                        <em>Simple Todo List with adding and filter by diff status.</em>
                    </p>
                </div>
                <AddUnit/>
                <br/>
                <ListUnit/>
                <FilterUnit/>
            </div>
        );
    }
}

export default App;
