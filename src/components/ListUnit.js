
import React, {Component} from 'react';
import '../css/ListUnit.css';
export default class ListUnit extends Component {
    constructor(props) {
        super(props);
        this.spanContent = React.createRef();
    }

    spanBlur(id){
        this.props.onSpanBlur(id, this.spanContent.current.innerText);
    }

    render() {
        const {onCheckBoxClicked, onSpanClicked} = this.props;
        let itemsArray = this.props.items.map(item => {
            let itemElem = null;
            if (item.display) {
                itemElem = <li className={item.checked ? 'checked' : ''}>
                    <input name="done-todo" type="checkbox" className="done-todo" checked={item.checked}
                           onClick={onCheckBoxClicked.bind(this, item.id)}/>
                    <span ref={this.spanContent} contentEditable={item.editable} onClick={onSpanClicked.bind(this, item.id)}
                          onBlur={this.spanBlur.bind(this, item.id)}> {item.content}</span>
                </li>
            }
            return itemElem;
        });

        let resultElem =
            <ol>
                {itemsArray}
            </ol>
        return resultElem;
    }

}
