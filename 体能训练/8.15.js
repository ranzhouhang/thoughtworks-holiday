/*题目：统计数组 arr 中值等于 item 的元素出现的次数
 *例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
 *要求：不要使用for循环
 */

 function main(arr,item) {
     let count = 0;

     function equalnumber(value) {
         if (value === item) {
             count++
         }
     }

     let newarry = arr.filter(equalnumber);
     console.log('item出现的次数为：'+count);
 }
 main([1,3,7,1,4],1);


