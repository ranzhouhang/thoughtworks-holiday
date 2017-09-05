'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach(
        item => {
            objectB.value.some(a => a === item.key) ?
                result.push({key: item.key, count: item.count-Math.floor(item.count/3)}) :
                result.push(item)
        }
    );
    return result;
};

