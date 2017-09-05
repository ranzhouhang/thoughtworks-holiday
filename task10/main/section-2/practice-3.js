'use strict';
function special(collection) {
    let array=[];
    collection.forEach(item=>{
        let a=/(\w).(\d{1,2}).?/i.exec(item);
        if(a) {
            array.push({name:a[1],summary:a[2]})}
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
            result.some(value=>value.name===item)?
                result.find(value=>value.name===item).summary++:
                result.push({name:item, summary:1})
        }
    );
    return result
}
function result(array,result) {
    array.forEach(
        item=>{
            result.some(value=>value.name===item.name)?
                result.find(value=>value.name===item.name).summary+=parseInt(item.summary,10):
                result.push({name:item.name,summary:parseInt(item.summary,10)})
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
