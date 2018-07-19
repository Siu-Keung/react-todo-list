import {connect} from 'react-redux'
import {handleCheckBoxClicked, handleSpanClicked, handleSpanBlur} from "../actions/actions";
import ListUnit from '../components/ListUnit';

const mapStateToProps = (state, ownProps) =>{
    return {items: state.items};
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onCheckBoxClicked: (id) => dispatch(handleCheckBoxClicked(id)),
        onSpanClicked: (id) => dispatch(handleSpanClicked(id)),
        onSpanBlur: (id, content) => dispatch(handleSpanBlur(id, content))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUnit)