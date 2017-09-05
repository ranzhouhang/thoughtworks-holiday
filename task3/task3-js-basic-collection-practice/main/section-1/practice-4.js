'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
var result=[];
var collectiona=[];
collectionA.forEach(function(item){
    collectiona.push(item.key)
});
collectiona.forEach(function(project){
    if(objectB.value.indexOf(project)>-1){
        result.push(project)
    }
});
return result;
}
