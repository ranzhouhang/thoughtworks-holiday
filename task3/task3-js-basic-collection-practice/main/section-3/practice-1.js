'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result=[]
collectionA.forEach(
    item =>{
        objectB.value.forEach(
            project=>{
                if(item.key==project){
                    item.count=item.count-1}
}
)
    result.push(item)
}
)

  return result;
}
