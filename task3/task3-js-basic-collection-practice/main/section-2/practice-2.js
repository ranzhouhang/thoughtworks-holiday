'use strict';

module.exports = function countSameElements(collection) {
let result=[];
var item;
var app;
var bpp;
var cpp=[];
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
for(var k=0;k<result.length;k++) {
    if (result[k].count == 1) {
        item=result[k].key;
        result.splice(k,1)
    }
};
app=item.substring(0,1);
bpp=item.substring(2.3);
cpp=parseInt(bpp);
result.push({key:app,count:cpp})
return result;
};

