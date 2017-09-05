'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
  collectionA.filter(
    item=>{
        if(collectionB[0].some(value=>value===item)){
            result.push(item)
        }
    }
);
    return result;
};
