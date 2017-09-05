module.exports = function bestCharge(inputs){

   
//将id转化为菜单
let thefirst=[];
let thesecond=[];
let third=[];
inputs.forEach(
    item=> {
    let thefirst = /(\w{4}\d{4})(?:\s\w\s(\d+))?/i.exec(item);
thesecond.push(thefirst);
});
//获得id中的菜单
thesecond.forEach(
    item=>{
    switch (item[1]){
case 'ITEM0001':
    third.push({name:'黄焖鸡',count:item[2],price:18});
    break;
case 'ITEM0013':
    third.push({name:'肉夹馍',count:item[2],price:6});
    break;
case 'ITEM0022':
    third.push({name:'凉皮',count:item[2],price:8});
    break;
}
}
);
let preferentialone=[];
let summaryprice=0;
third.forEach(
    item=>{
    //优惠政策一的半价商品
    switch (item.name){
case '黄焖鸡':
    let summary1=parseInt(item.count,10)*parseInt(item.price,10)/2;
    preferentialone.push({name:item.name,price:summary1});
    break;
case '凉皮':
    let summary2=parseInt(item.count,10)*parseInt(item.price,10)/2;
    preferentialone.push({name:item.name,price:summary2});
    break;
}
//不优惠情况下价格总和
let sum=parseInt(item.count,10)*parseInt(item.price,10);
summaryprice+=sum;

}
);
//优惠一所优惠的金额
let summarypre=0;
preferentialone.forEach(
    item=>{
    summarypre+=parseInt(item.price,10);
}
);
//输出的文本
let listhead='============= 订餐明细 =============\n';
let listbody='-----------------------------------\n';
let listfeet='===================================';
//选择优惠一还是优惠二
if(summarypre>5.99){
//经过优惠一后的价格总计
    let total=summaryprice-summarypre;
    third.forEach(
        item=>{
        listhead+=item.name+' x '+item.count+' = '+parseInt(item.count,10)*parseInt(item.price,10)+'元\n';
}
);
//优惠一最终输出文本栏
    listhead+=listbody+'使用优惠:\n'+'指定菜品半价(黄焖鸡，凉皮)，省'+summarypre+'元\n'+listbody+'总计：'+total+'元\n'+listfeet;
}else {
    //选择优惠二还是不优惠
    if (summaryprice > 29.99) {
        //选择优惠二
        summaryprice = summaryprice - 6;
        third.forEach(
            item=>{
            listhead+= item.name + ' x ' + item.count + ' = ' + parseInt(item.count, 10) * parseInt(item.price, 10) + '元\n';
    }
    );
        listhead+= listbody + '使用优惠:\n' + '满30减6元，省6元\n' + listbody + '总计：' + summaryprice + '元\n' + listfeet;
    }
    else {
        //不优惠
        third.forEach(
            item => {
            listhead += item.name + ' x ' + item.count + ' = ' + parseInt(item.count, 10) * parseInt(item.price, 10) + '元\n';
    }
    );
        listhead+= listbody + '总计：' + summaryprice + '元\n' + listfeet;
    }
}
  return listhead;

}