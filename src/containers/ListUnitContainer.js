import {connect} from 'react-redux'
import {handleCheckBoxClicked, handleSpanClicked, handleEnterKeyUp} from "../actions/actions";
import ListUnit from '../components/ListUnit';
import dataApi from '../api/DataApi';
import filterHandlers from'../tools/FilterHandlers';

const mapStateToProps = (state, ownProps) => {
    let filterName = ownProps.match.params.filterName;
    if(!filterName)
        filterName = '全部';
    state.allFilters.forEach(item => item.title === filterName ? item.selected = true : item.selected = false);
    let handleMethod = filterHandlers.find(item => item.title === filterName).handleMethod;
    let displayItems = state.items.filter(item => handleMethod(item));
    return {items: displayItems};
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
        },
        onPageLoad: () => dataApi.getItemsByFilter("全部", (items) => dispatch({type: "FILTER_CHANGE", items: items, newFilterName: '全部'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUnit)