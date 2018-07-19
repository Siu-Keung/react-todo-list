import {connect} from 'react-redux'
import {handleFilterChanged} from "../actions/actions";
import FilterUnit from '../components/FilterUnit'

const mapStateToProps = (state, ownProps) =>{
    return {allFilters: state.allFilters};
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onFilterChanged: (newFilterName) => dispatch(handleFilterChanged(newFilterName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterUnit)