import generateUUID from '../tools/tools';


const initState = {
    items: [
        {id: '123456', content: '做作业', checked: false, display: true, editable: false}
    ],
    allFilters: [{title: '全部', selected: true}, {title: '未完成', selected: false}, {title: '已完成', selected: false}]
};

const filterHandlers = [
    {title: '全部', handleMethod: (item) => true},
    {title: '未完成', handleMethod: (item) => !item.checked},
    {title: '已完成', handleMethod: (item) => item.checked}];

export default (state = initState, event) => {
    let targetItem = null;
    let newState = JSON.parse(JSON.stringify(state));
    switch (event.type) {
        case "ADD_ITEM":
            newState.items.push(event.value);
            return newState;
        case 'ITEM_CHECKED':
            targetItem = newState.items.find(item => item.id === event.value);
            targetItem.checked = !targetItem.checked;
            return newState;
        case 'SPAN_CLICKED':
            targetItem = newState.items.find(item => item.id === event.value);
            targetItem.editable = true;
            return newState;
        case 'ITEM_CONTENT_CHANGE':
            targetItem = newState.items.find(item => item.id === event.value.id);
            targetItem.editable = false;
            targetItem.content = event.value.content;
            return newState;
        case 'FILTER_CHANGE':
            newState.items = event.value;
            newState.allFilters.forEach(item => {
               if(item.title === event.value)
                   item.selected = true;
               else
                   item.selected = false;
            });
            return newState;
        default:
            return state;
    }
}