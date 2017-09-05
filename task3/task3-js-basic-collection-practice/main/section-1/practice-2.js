'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    
let result=[];
var collectionb
collectionB.forEach(function(value) {
       collectionb = value;
    });
collectionA.forEach(function(value)
{
    if (collectionb.indexOf(value)>-1){
        result.push(value)}
});
return result;
}
