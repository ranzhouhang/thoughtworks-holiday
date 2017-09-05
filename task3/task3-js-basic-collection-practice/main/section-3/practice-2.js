'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result=[]
collectionA.forEach(
    item =>{
        objectB.value.forEach(
            project=>{
                if(item.key==project){
                    item.count=item.count-Math.floor(item.count/3)}
}
)
    result.push(item)
}
)

  return result;
}
