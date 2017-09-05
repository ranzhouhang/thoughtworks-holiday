'use strict';

function summarize(collectionA) {
    let result = [];
    collectionA.filter(
        item=>{
            result.some(value=>value.key===item)?
                result.find(value=>value.key===item).count++:
                result.push({key:item,count:1})
        }
    );
    return result;
}
function result(collection, objectB) {
    let result = [];
    collection.forEach(
        item => {
            objectB.value.some(a => a === item.key) ?
                result.push({key: item.key, count: item.count-Math.floor(item.count/3)}) :
                result.push(item)
        }
    );
    return result;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return result(summarized, objectB);
};
