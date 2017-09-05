'use strict';


module.exports = function countSameElements(collection) {
    let result = [];
   collection.filter(
    item=>{
        result.some(value=>value.key===item)?
            result.find(value=>value.key===item).count++:
            result.push({key:item,count:1})
    }
);
    return result;
};
