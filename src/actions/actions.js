
//上面
export const addItem = (newItem) => ({type: 'ADD_ITEM', value: newItem});

//中间
export const handleCheckBoxClicked = (id) => ({type: 'ITEM_CHECKED', value: id});
export const handleSpanClicked = (id) => ({type: 'SPAN_CLICKED', value: id});
export const handleSpanBlur = (id, content) => ({type: 'ITEM_CONTENT_CHANGE', value: {id, content}})

//下面
export const handleFilterChanged = (newFilterName) => ({type: 'FILTER_CHANGE', value: newFilterName});