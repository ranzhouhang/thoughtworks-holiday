'use strict';

module.exports = function countSameElements(collection) {
let result=[];
for(var i = 0;i<collection.length;)
{
    var coun = 0;
    collection.forEach(function(value)
    {
        if(collection[i] == value)
        {
            coun++;
        }
    })
    result.push({key:collection[i],count:coun});
    i+=coun;
};
return result;
}
