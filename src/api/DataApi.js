import filterHandlers from '../tools/FilterHandlers';
import axios from 'axios';

const DataApi = {

    addItem(newItemContent, callback){
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

    toggleCheckedStatus(id, callback){
        axios({
            url: `http://127.0.0.1:9999/toggleCheckedStatus/${id}`,
            method: 'post',
            params: {id}
        }).then(response => {
            if(response.data === 'succeeded')
                callback();
        });
    },

    updateItemContent(id, newContent, callback){
        axios({
            url: `http://127.0.0.1:9999/updateItemContent/${id}`,
            method: 'post',
            params: {newContent},
        }).then(response => {
           if(response.data === 'succeeded')
               callback(id, newContent);
        });
    },

    getItemsByFilter(filterTitle, callback){
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