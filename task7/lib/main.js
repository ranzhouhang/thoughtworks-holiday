let listend='Take one down and pass it around, 1 bottle of beer on the wall.\n'+
    '1 bottle of beer on the wall, 1 bottle of beer.\n'+
    'Take one down and pass it around, no more bottles of beer on the wall.\n'+
    'No more bottles of beer on the wall, no more bottles of beer.\n'+
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
let listbody='';
let listhead='99 bottles of beer on the wall, 99 bottles of beer.\n';
function xunhuan(value) {
    let num = parseInt(value, 10);
    while (num > 1) {
        listbody += 'Take one down and pass it around, ' + num + ' bottles of beer on the wall.\n' +
            num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\n';
        num = num - 1;
    }
}
function main(value) {
    if(value===1){
        return (listend);
    }else if(value>1&&value<99){
        xunhuan(value);
        return (listbody + listend);
    }else if(value===99){
        xunhuan(98);
        return (listhead+listbody+listend);
    }
}
module.exports = main;
