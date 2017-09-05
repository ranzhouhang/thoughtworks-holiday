'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  
  
var collectionb=objectB.value;
let result=[];
collectionA.forEach(function(item){
    if(collectionb.indexOf(item)>-1){
        result.push(item)
    }
});
return result;
  
}
