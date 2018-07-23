import React, {Component} from 'react';
import '../css/AddUnit.css';
import 'antd/dist/antd.css';
import {Input} from 'antd';
const Search = Input.Search;

export default class AddUnit extends Component {
    constructor(props) {
        super(props);
        this.addItemInput = React.createRef();
    }


    // handleAddButtonClicked = () => {
    //     const onAddButtonClicked = this.props.onAddButtonClicked;
    //     onAddButtonClicked(this.addItemInput.current.value);
    // }

    render() {
        let resultElem = (
            <div>
                {/*<input className="input-text" type="text" name="ListItem" ref={this.addItemInput}/>*/}
                {/*<div id="button" onClick={this.handleAddButtonClicked}>Add</div>*/}

                <Search
                    placeholder="请输入要添加的内容"
                    enterButton="Add"
                    onSearch={value => this.props.onAddButtonClicked(value)}
                />

            </div>)
        return resultElem;
    }

}
