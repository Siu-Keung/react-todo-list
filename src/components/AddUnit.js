import emitter from './emitter'
import React, {Component} from 'react';
import '../css/AddUnit.css';

export default class AddUnit extends Component {
    constructor(props) {
        super(props);
        this.inputTextFieldVal = '';
    }

    onAddButtonClicked = () => {
        emitter.emit("addItemEvent", this.inputTextFieldVal);
    }

    render() {
        let resultElem =
            <div>
                <input className="input-text" type="text" name="ListItem" onChange={(event) => this.inputTextFieldVal = event.target.value}/>
                <div id="button" onClick={this.onAddButtonClicked}>Add</div>
            </div>
        return resultElem;
    }

}
