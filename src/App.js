import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUnit from './components/AddUnit'
import ListUnit from './components/ListUnit'

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
                <div>
                    <ul id="filters">
                        <li>
                            <a href="#" data-filter="all">全部</a>
                        </li>
                        <li>
                            <a href="#" data-filter="active">未完成</a>
                        </li>
                        <li>
                            <a href="#" data-filter="complete">已完成</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
