const coderule=['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
//输入的是编码，转化为数字
let value='|:::||||::::|::|:|:|::::|||:::||::|:|:|:::|::|:::|||';
//计算条码长度（32，52）
if(value.length===32||value.length===52) {
    let barcode = [];
    for (i = 1; i < value.length; i += 5) {
        barcode.push(value.substring(i, i + 5))
    }
//拆分条码得到barcode
    let num = [];
    barcode.forEach(
        item => {
            for (i = 0; i < parseInt(coderule.length, 10); i++) {
                if (item === coderule[i]) {
                    num.push(i)
                }
            }
        }
    );
//验证校验码环节
    let checkcode = num[num.length - 1];
//得到校验码
    num.pop();
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum += parseInt(num[i], 10);
    }
//计算条码中的数字总和
    if ((sum + checkcode) % 10 === 0) {
        let figure = num.join('');
        console.log(figure);
    }
    else {
        console.log('校验码错误');
    }
}
else if(value[0]===value[value.length-1]&&value[0]==='|'){
    console.log('条码长度错误')
}
else{
    console.log('条码开始和末尾不为|，错误')
}



