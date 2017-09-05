'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
   collectionA.filter(
    item=>{
        if(collectionB.value.some(value=>value===item.key)){
            result.push(item.key)
        }
    }
);
    return result;
};
