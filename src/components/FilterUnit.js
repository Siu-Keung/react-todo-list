import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Input, Icon, Tag} from 'antd';

export default class FilterUnit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onFilterChanged} = this.props;
        let filterElems = this.props.allFilters.map((item) => {
            let resultElem =
                (<li style={{display: 'inline', marginRight: '10%'}}>
                    <Link to={item.title} onClick={onFilterChanged.bind(this, item.title)}>
                        {item.selected ? <Tag color="#f50">{item.title}</Tag> : item.title}
                    </Link>
                </li>);
            return resultElem;
        });

        return <div>
            <ul id="filters" style={{textAlign: 'center', marginTop: '2%'}}>
                {filterElems}


            </ul>
        </div>
    }

}