import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUnitContainer from './containers/AddUnitContainer';
import ListUnitContainer from './containers/ListUnitContainer';
import FilterContainer from './containers/FilterContainer';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Input, Card, Icon} from 'antd';

const Search = Input.Search;

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>

                    <div style={{background: '#ECECEC', padding: '30px'}}>

                        <Card
                            title={
                                <div><h2><Icon type="bars" /> React To Do List</h2><p><em>Simple Todo List with adding and filter by diff
                                    status.</em></p></div>
                            } bordered={false} style={{width: '40%', margin: 'auto'}}>
                            <AddUnitContainer/><br/>
                            <Route path="/:filterName" component={ListUnitContainer}/>
                            <Route exact path="" component={ListUnitContainer}/>
                            <FilterContainer/>
                        </Card>

                    </div>


                </div>
            </BrowserRouter>
        );
    }
}


export default App;
