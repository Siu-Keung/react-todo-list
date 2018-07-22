import filterHandlers from '../tools/FilterHandlers';
import axios from 'axios';

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
    items: [],

    allFilters: [{title: '全部', selected: true}, {title: '未完成', selected: false}, {title: '已完成', selected: false}],

    getAllItems(){
        return this.items;
    },

    getAllFilters(){
        return this.allFilters;
    },

    addItem(newItemContent, callback){
        // let newItem = {id: generateUUID(), content: newItemContent, checked: false, display: true, editable: false};
        // this.items.push(newItem);
        // callback(newItem);
        axios({
            method: 'post',
            url: "http://127.0.0.1:9999/addItem",
            params: {content: newItemContent}
        }).then(
            response => {
                let newItem = response.data;
                newItem.display = true;
                newItem.editable =false;
                callback(newItem);
        });

    },

    updateItem(id, newItem, callback){
        let index = this.items.findIndex(item => item.id === id);
        this.items.splice(index, 1, newItem);
        callback();
    },

    toggleCheckedStatus(id, callback){
        let targetItem = this.items.find(item => item.id === id);
        targetItem.checked = !targetItem.checked;
        callback();
    },

    updateItemContent(id, newContent, callback){
        this.items.find(item => item.id === id).content = newContent;
        callback(id, newContent);
    },

    updateActiveFilter(title){
        this.allFilters.forEach(item => {
            if(item.title === title)
                item.selected = true;
            else
                item.selected = false;
        });
    },

    getItemsByFilter(filterTitle, callback){
        // let resultItems = this.items.filter(item =>
        //     filterHandlers.find(filterItem => filterItem.title === filterTitle).handleMethod(item));
        // callback(JSON.parse(JSON.stringify(resultItems)));

        axios.get(`http://127.0.0.1:9999/getItems/${filterTitle}`).then(response =>{
            let items = response.data;
            items.forEach(item => {
               item.display = true;
            });
            callback(items);
        });

    }



}

export default DataApi;