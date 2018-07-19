import emitter from './emitter'
import React, {Component} from 'react';
import '../css/AddUnit.css';

export default class AddUnit extends Component {
    constructor(props) {
        super(props);
        this.addItemInput = React.createRef();
    }

    handleAddButtonClicked = () => {
        // emitter.emit("addItemEvent", this.addItemInput.current.value);
        const onAddButtonClicked = this.props.onAddButtonClicked;
        onAddButtonClicked(this.addItemInput.current.value);
    }

    render() {
        let resultElem =  <div>
                <input className="input-text" type="text" name="ListItem" ref={this.addItemInput}/>
                <div id="button" onClick={this.handleAddButtonClicked}>Add</div>
            </div>
        return resultElem;
    }

}
