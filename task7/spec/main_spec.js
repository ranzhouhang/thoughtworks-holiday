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

    it("no number input ", function(){

        var result = main();
        var expect_string = undefined;
        
        expect(expect_string).to.equal(result);
    });

    it("input the number get the lyrics", function(){

        
        var result =main(1);
        var expect_string ='Take one down and pass it around, 1 bottle of beer on the wall.\n'+
    '1 bottle of beer on the wall, 1 bottle of beer.\n'+
    'Take one down and pass it around, no more bottles of beer on the wall.\n'+
    'No more bottles of beer on the wall, no more bottles of beer.\n'+
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

        expect(expect_string).to.equal(result);
    });
});