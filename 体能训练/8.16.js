/* 题目：找出数组 arr 中重复出现过的元素
 *例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */

 let arr=['a','ab','ed','da','a','ed','b'];
 let result=[];
 arr.filter(
     item=>{if(arr.indexOf(item)!==arr.lastIndexOf(item)){
         if(!result.some(value=>value===item)){
             result.push(item)
         }
}
     }
 );
console.log(result);





