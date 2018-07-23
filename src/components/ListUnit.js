import React, {Component} from 'react';
import '../css/ListUnit.css';
import 'antd/dist/antd.css';
import {Input, Checkbox, List} from 'antd';

export default class ListUnit extends Component {
    constructor(props) {
        super(props);
    }

    onKeyUp = (id, event) => {
        if (event.keyCode === 13) {
            this.props.onEnterKeyUp(id, event.target.value);
        }
    }

    componentDidMount() {
        this.props.onPageLoad();
    }


    render() {
        const {onCheckBoxClicked, onSpanClicked} = this.props;
        let itemsArray = this.props.items.map(item => {
            let itemElem = null;
            if (item.display) {
                itemElem = <li className={item.checked ? 'checked' : ''} style={{width: '100%'}}>
                    <Checkbox checked={item.checked} onClick={onCheckBoxClicked.bind(this, item.id)}/>

                    {item.editable ?
                        (<Input style={{width: '90%'}} placeholder="请输入修改后的内容" defaultValue={item.content} onKeyUp={this.onKeyUp.bind(this, item.id)} />):
                        (<span onDoubleClick={onSpanClicked.bind(this, item.id)}>{item.content}</span>)}

                </li>
            }
            return itemElem;
        });

        return (
            <List
                bordered
                dataSource={itemsArray}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        );
    }

}
