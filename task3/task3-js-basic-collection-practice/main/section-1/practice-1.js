'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
    
let result=[];

collectionA.forEach(function(value) {
    if (collectionB.indexOf(value) > -1 ) {
        result.push(value);
    }
});
 
  return result;
}