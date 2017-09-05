/*数组去重
 *例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1],
 *输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */

 let arr = ['s','a','s','b','a',1,'1',1];
 let result = [];
 arr.filter(
     item=>{
         if(!result.some(value=>value===item)){
             result.push(item)
         }
     }
 )
 console.log(result);

