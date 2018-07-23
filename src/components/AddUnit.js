import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Icon} from 'antd';
const Search = Input.Search;

export default class AddUnit extends Component {
    constructor(props) {
        super(props);
        this.addItemInput = React.createRef();
    }

    render() {
        let resultElem = (
            <div>

                <Search
                    placeholder="请输入要添加的内容"
                    enterButton={<span><Icon type="plus-circle-o" /> Add</span>}
                    onSearch={value => this.props.onAddButtonClicked(value)}
                />

            </div>)
        return resultElem;
    }

}
