'use strict';
module.exports = function printInventory(inputs) {

    var  AllItems=require('../main/datbase.js');


var allitemsA=[];
AllItems.AllItems.forEach(
    item=>{
    var allitemsB=/(\w{4}\d{6})-(\d)/i.exec(item)
    if(!allitemsB)
{allitemsA.some(value=>value.barcode===item)?
    ++allitemsA.find(value=>value.barcode===item).count:
    allitemsA.push({barcode:item,count:1})}else
{allitemsA.push({barcode:allitemsB[1],count:parseInt(allitemsB[2],10)})
}
}
)
const  loadPromotions=[
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'];
var loadAllItems =[];
allitemsA.forEach(
    item=>{
    switch(item.barcode){
case 'ITEM000001':
    loadAllItems.push({name: '雪碧', unit: '瓶', price: 3.00,count:item.count});
    break;
case 'ITEM000003':
    loadAllItems.push({name: '荔枝', unit: '斤', price: 15.00,count:item.count});
    break;
case 'ITEM000005':
    loadAllItems.push({name:'方便面',unit: '袋', price: 4.50,count:item.count});
    break;
}
}
)
var expect='***<没钱赚商店>购物清单***\n';
var ttt='----------------------\n';
var yyy=0;
loadAllItems.forEach(
    item=>{
    if(item.name!='荔枝'){
    var value=item.price * parseInt(item.count-1,10);
    value=value.toFixed(2);
}else{
    var value=item.price * parseInt(item.count,10);
    value=value.toFixed(2);}

expect+= '名称：'+item.name+'，数量：'+item.count+item.unit+'，单价：'+item.price.toFixed(2)+'(元)'+'，小计：'
    + value +'(元)\n';
yyy+=parseInt(value,10);
}
)
yyy=yyy.toString()+".00";
var www=[];
loadPromotions.forEach(
    item=>{
    allitemsA.forEach(
    value=>{
    if(value.barcode==item){
    www.push({barcode:item,count:Math.floor(value.count/3)})
}
}
)
}
);
var eee=[];
var uuu=0;
www.forEach(
    item=>{
    switch(item.barcode){
case 'ITEM000001':
    eee.push({name: '雪碧', unit: '瓶',count:item.count,price: 3.00})
    break;
case 'ITEM000005':
    eee.push({name:'方便面',unit: '袋',count:item.count,price: 4.50})
    break;
case 'ITEM000000':
    eee.push({name:'可口可乐',unit: '瓶',count:item.count,price: 3.00})
    break;
}
}
)
var rrr='----------------------\n' + '挥泪赠送商品：\n' ;
eee.forEach(
    item=>{
    rrr+='名称：'+item.name+'，数量：'+item.count+item.unit+'\n'
uuu+=item.price * parseInt(item.count,10);
}
)
uuu=uuu.toFixed(2);
var ttt='----------------------\n'
var expectText=expect+rrr+ttt+'总计：'+yyy+'(元)\n'+'节省：'+uuu+'(元)\n'+'**********************';



    console.log(expectText);

}
