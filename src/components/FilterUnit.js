import emitter from './emitter'
import React, {Component} from 'react';

export default class FilterUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [{title: '全部', selected: true}, {title: '未完成', selected: false}, {title: '已完成', selected: false}]
        };
    }

    onFilterClicked(title) {
        let newFilters = this.state.filters.map((item) => {
            if (item.title === title)
                item.selected = true;
            else
                item.selected = false;
            return item;
        });
        this.state.filters = newFilters;
        this.setState(this.state);
        emitter.emit('filterChangeEvent', title);
    }

    render() {
        let filterElems = this.state.filters.map((item) => {
            let resultElem = <li>
                <a href="#" className={item.selected ? 'selected' : ''}
                   onClick={this.onFilterClicked.bind(this, item.title)}>{item.title}</a>
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