import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUnit from './components/AddUnit'
import ListUnit from './components/ListUnit'
import FilterUnit from "./components/FilterUnit";
import './todo.css';
import AddUnitContainer from './containers/AddUnitContainer';
import ListUnitContainer from './containers/ListUnitContainer';
import FilterContainer from './containers/FilterContainer';

class App extends Component {

    render() {
        return (
            <div className="container">
                <div>
                    <h2>React To Do List</h2>
                    <p>
                        <em>Simple Todo List with adding and filter by diff status.</em>
                    </p>
                </div>
                {/*<AddUnit/>*/}
                <AddUnitContainer />
                <br/>
                {/*<ListUnit/>*/}
                <ListUnitContainer/>
                {/*<FilterUnit/>*/}
                <FilterContainer/>
            </div>
        );
    }
}

export default App;
