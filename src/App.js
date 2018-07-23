import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './todo.css';
import AddUnitContainer from './containers/AddUnitContainer';
import ListUnitContainer from './containers/ListUnitContainer';
import FilterContainer from './containers/FilterContainer';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Input} from 'antd';
const Search = Input.Search;

class App extends Component {

    render() {
        // return (
        //     <BrowserRouter>
        //         <div className="container">
        //             <div>
        //                 <h2>React To Do List</h2>
        //                 <p>
        //                     <em>Simple Todo List with adding and filter by diff status.</em>
        //                 </p>
        //             </div>
        //             <AddUnitContainer/>
        //             <br/>
        //
        //             <Route path="/:filterName" component={ListUnitContainer}/>
        //             <Route exact path="" component={ListUnitContainer}/>
        //             <FilterContainer/>
        //
        //         </div>
        //     </BrowserRouter>
        // );
        return (
            <BrowserRouter>
                <div className="container">
                    <div>
                        <h2>React To Do List</h2>
                        <p>
                            <em>Simple Todo List with adding and filter by diff status.</em>
                        </p>
                    </div>
                    <AddUnitContainer/><br/>

                    <Route path="/:filterName" component={ListUnitContainer}/>
                    <Route exact path="" component={ListUnitContainer}/>

                    <FilterContainer/>

                </div>
            </BrowserRouter>
        );
    }
}




export default App;
