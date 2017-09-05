function main(value){
    const coderule=['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
if(/^\d{5}$|^\d{9}$|^\d{5}[-]\d{4}$/.test(value)){
    let serial = /(\d)(\d)(\d)(\d)(\d)(?:.?(\d)(\d)(\d)(\d))?/.exec(value);
    let index = [];
    serial.forEach(
        item => {
            if (/\d/.test(item)) {
                index.push(item)
            }
        }
    );
//得到index，数字数组
//得校验码code,转化为编码
    let code = 0;
    let sum = 0;
    let coding = '|';
    let ending = '|';
    for (i = 1; i < index.length; i++) {
        sum += parseInt(index[i], 10);
        coding += coderule[index[i]]
    }
    for (i = 0; i < 10; i++) {
        if ((sum + i) % 10 === 0) {
            code += i;
        }
    }
    coding += coderule[code] + ending;
//最终编码为coding字符串
    console.log('条码为：'+coding);
//输入的是编码，转化为数字
    }else if(value.length===32||value.length===52){
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
        console.log('数字编码为：'+figure);
    }
    else {
        console.log('校验码错误');
    }
}else {
    console.log('格式错误')
}

}
main('|:::|||::|::|:|::||::|:::|::');