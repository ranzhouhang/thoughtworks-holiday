"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("输入五位数字转化为条码", function(){

        var result = main('10475');
        var expect_string = '条码为：|:::||||::::|::||:::|:|:|:::||:|';
        
        expect(expect_string).to.equal(result);
    });

    it("输入九位数字转化为条码", function(){

        
        var result = main('104757894');
        var expect_string = '条码为：|:::||||::::|::||:::|:|:|:|:::||::|:|:|:::|::|:|:|:|';

        expect(expect_string).to.equal(result);
    });
    it("输入十位数字转化为条码", function(){

        
        var result =main('10475-7894');
        var expect_string = '条码为：|:::||||::::|::||:::|:|:|:|:::||::|:|:|:::|::|:|:|:|';

        expect(expect_string).to.equal(result);
    });
     it("输入五位条码转化为数字", function(){

        
        var result =main('|:::||||::::|::||:::|:|:|:::||:|');
        var expect_string = '数字编码为：10475';

        expect(expect_string).to.equal(result);
    });
    it("输入九位或十位条码转化为数字", function(){

        
        var result =main('|:::||||::::|::||:::|:|:|:|:::||::|:|:|:::|::|:|:|:|');
        var expect_string = '数字编码为：104757894';

        expect(expect_string).to.equal(result);
    });
    it("数字格式或长度不对会给予显示", function(){

        
        var result =main('185675');
        var expect_string = '格式错误';

        expect(expect_string).to.equal(result);
    });
   it("校验码不对会给予显示", function(){

        
        var result =main('|:::|||::|::|:|::||::|:::|::||||');
        var expect_string = '校验码错误';

        expect(expect_string).to.equal(result);
    });
       it("条码乱输会给予显示", function(){

        
        var result =main('|:::|||::|::|:|::||::|:::|::');
        var expect_string = '格式错误';

        expect(expect_string).to.equal(result);
    });
    


});