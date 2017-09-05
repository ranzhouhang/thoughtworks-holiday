'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.filter(
    item=>{
        if(collectionB.value.some(value=>value===item)){
            result.push(item)
        }
    }
);
    return result;
};
