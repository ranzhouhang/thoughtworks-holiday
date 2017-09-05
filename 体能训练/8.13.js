/*给定一个未排序的整数数组，找到其中位数。
 *function XXX(arr){}
 */
function median(array) {
//数组排序
array.sort(function compare(a,b){return a-b;});
//如果数组长度是奇数
if(array.length%2!==0){
console.log(array[(array.length-1)/2]);
}
//如果数组长度是偶数
else{
    console.log((array[(array.length-2)/2]+array[array.length/2])/2);
}}
median([1,5,8,3,7,6,9,4,2,0]);
