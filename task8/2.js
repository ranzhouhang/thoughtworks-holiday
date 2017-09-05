const coderule=['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
//1.输入的是五位或九位或十位数字的情况（转化为编码）
let value='10475';//纽约布朗士
if(/^\d{5}$|^\d{9}$|^\d{5}[-]\d{4}$/.test(value)) {
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
    console.log(coding);
//输入的是编码，转化为数字
}else{
    console.log('数字编码有误');
}


