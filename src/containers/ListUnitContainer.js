import {connect} from 'react-redux'
import {handleCheckBoxClicked, handleSpanClicked, handleEnterKeyUp} from "../actions/actions";
import ListUnit from '../components/ListUnit';
import dataApi from '../api/DataApi';

const mapStateToProps = (state, ownProps) => {
    return {items: state.items};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCheckBoxClicked: (id) => {
            dataApi.toggleCheckedStatus(id, () => {
                dispatch({type: 'ITEM_CHECKED', value: id})
            });
        },
        onSpanClicked: (id) => dispatch(handleSpanClicked(id)),
        onEnterKeyUp: (id, content) => {
            // dispatch(handleEnterKeyUp(id, content))
            dataApi.updateItemContent(id, content, (id, content) => {
                    if (!id)
                        return;
                    dispatch({type: 'ITEM_CONTENT_CHANGE', value: {id, content}});
                }
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUnit)