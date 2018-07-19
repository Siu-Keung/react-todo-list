import {connect} from 'react-redux'
import {addItem} from "../actions/actions";
import AddUnit from '../components/AddUnit';

const mapStateToProps = (state, ownProps) =>{
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onAddButtonClicked: (newItem) => dispatch(addItem(newItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUnit)