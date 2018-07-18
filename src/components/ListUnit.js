import emitter from './emitter'
import React, {Component} from 'react';

export default class ListUnit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentFilter: '全部',
            filters: ['全部', '未完成', '已完成'],
            items: [{id: 'b358f498-2cac-48b9-ba3a-5e264868a9', content: '做作业', checked: false, display: true},
                {id: 'b358f498-2cac-48b9-ba3a-5e2648672a9', content: '看电视', checked: true, display: true},
                {id: 'b358f498-2cac-48b9-ba3a-5e268678602a9', content: '打游戏', checked: false, display: true}]
        };
        //设置监听器，监听用户是否添加新项目。
        emitter.addListener('addItemEvent', (message) => {
            this.state.items.push({id: this.generateUUID(), content: message.trim(), checked: false, display: true});
            this.setState(this.state);
        });
    }

    //用于生成列表项的id
    generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }

    onCheckBoxClicked = (id) => {
        let item = this.state.items.find(current => current.id === id);
        item.checked = !item.checked;
        this.setState(this.state);
    }

    render() {
        let itemsArray = this.state.items.map(item => {
            return <li className={item.checked ? 'checked' : ''}>
                <input name="done-todo" type="checkbox" className="done-todo" checked={item.checked} onClick={this.onCheckBoxClicked.bind(this, item.id)}/>
                <span> {item.content}</span>
            </li>
        });

        let resultElem =
            <ol>
                {itemsArray}
            </ol>
        return resultElem;
    }

}
