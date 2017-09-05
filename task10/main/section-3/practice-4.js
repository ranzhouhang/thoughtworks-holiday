'use strict';

function special(collectionA) {
    let array=[];
    collectionA.forEach(item=>{
        let a=/^(\w).(\d)$/i.exec(item);
        if(a) {
            array.push({key:a[1],count:a[2]})}
    });
    return array
}

function common(collectionA){
    let array2=[];
    collectionA.forEach(
        item=>{
            let a=/^\w$/.exec(item);
            if(a){
                array2.push(a[0])
            }
        }
    );
    return array2;
}
function summarize(array2){
    let result=[];
    array2.forEach(item=> {
            result.some(value=>value.key===item)?
                result.find(value=>value.key===item).count++:
                result.push({key: item, count: 1})
        }
    );
    return result
}
function result(array,result) {
    array.forEach(
        item=>{
            result.some(value=>value.key===item.key)?
                result.find(value=>value.key===item.key).count+=parseInt(item.count,10):
                result.push({key:item.key,count:parseInt(item.count,10)})
        }
    );
    return result
}
function res(collection, objectB) {
    let result = [];
    collection.forEach(
        item => {
            objectB.value.some(a => a === item.key) ?
                result.push({key: item.key, count: item.count - Math.floor(item.count / 3)}) :
                result.push(item)
        }
    );
    return result;
}


module.exports = function createUpdatedCollection(collectionA, objectB) {
    let a = special(collectionA);
    let b = common(collectionA);
    let c = summarize(b);
    let d = result(a, c);
    return  res(d, objectB);
};


