
//用于生成列表项的id
function generateUUID() {
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

const DataApi = {
    items: [{id: '123456', content: '打游戏', checked: false, display: true, editable: false}],

    allFilters: [{title: '全部', selected: true}, {title: '未完成', selected: false}, {title: '已完成', selected: false}],

    filterHandlers: [
        {title: '全部', handleMethod: (item) => true},
        {title: '未完成', handleMethod: (item) => !item.checked},
        {title: '已完成', handleMethod: (item) => item.checked}],

    getAllItems(){
        return this.items;
    },

    getAllFilters(){
        return this.allFilters;
    },

    addItem(newItemContent, callback){
        let newItem = {id: generateUUID(), content: newItemContent, checked: false, display: true, editable: false};
        this.items.push(newItem);
        callback(newItem);
    },

    updateItem(id, newItem){
        let index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1, newItem);
    },

    updateActiveFilter(title){
        this.allFilters.forEach(item => {
            if(item.title === title)
                item.selected = true;
            else
                item.selected = false;
        });
    },

    getItemsByFilter(filterTitle){
        let resultItems = this.items.filter(item =>
            this.filterHandlers.find(filterItem => filterItem.title === filterTitle).handleMethod(item));
        return resultItems;
    }



}

export default DataApi;