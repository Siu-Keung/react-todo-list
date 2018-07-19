import emitter from './emitter'
import React, {Component} from 'react';
import '../css/AddUnit.css';

export default class AddUnit extends Component {
    constructor(props) {
        super(props);
    }

    onAddButtonClicked = () => {
        emitter.emit("addItemEvent", this.refs.addItemInput.value);
    }

    render() {
        let resultElem =
            <div>
                <input className="input-text" type="text" name="ListItem" ref="addItemInput"/>
                <div id="button" onClick={this.onAddButtonClicked}>Add</div>
            </div>
        return resultElem;
    }

}
