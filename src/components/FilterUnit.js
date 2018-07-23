
import React, {Component} from 'react';
import '../css/FilterUnit.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class FilterUnit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onFilterChanged} = this.props;
        let filterElems = this.props.allFilters.map((item) => {
            let resultElem = <li>
                <Link to={item.title} className={item.selected ? 'selected' : ''}
                   onClick={onFilterChanged.bind(this, item.title)}>{item.title}</Link>
            </li>;
                   return resultElem;
        });

        return <div>
            <ul id="filters">
                {filterElems}
            </ul>
        </div>
    }

}