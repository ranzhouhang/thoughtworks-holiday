'use strict';

function special(collection) {
    let array=[];
    collection.forEach(item=>{
        let a=/^(\w).(\d)$/i.exec(item);
        if(a) {
        array.push({key:a[1],count:a[2]})}
    });
    return array
}

function common(collection){
    let array2=[];
    collection.forEach(
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
module.exports = function countSameElements(collection) {
    let a=special(collection);
    let b=common(collection);
    let c=summarize(b);
        return result(a,c)
};

