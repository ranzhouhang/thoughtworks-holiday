'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result=[];
var collectionB=[];

collectionA.forEach(res =>{
    var collection=/(\w+).(\d+)/i.exec(res);
    if(!collection)
        {
    collectionB.some(resu=>resu.key===res)?
    ++collectionB.find(resu => resu.key===res).count:
    collectionB.push({key:res,count:1})}
    else{collectionB.push({key:collection[1],count:parseInt(collection[2],10)});

}
})
collectionB.forEach(
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
