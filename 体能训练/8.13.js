/*����һ��δ������������飬�ҵ�����λ����
 *function XXX(arr){}
 */
function median(array) {
//��������
array.sort(function compare(a,b){return a-b;});
//������鳤��������
if(array.length%2!==0){
console.log(array[(array.length-1)/2]);
}
//������鳤����ż��
else{
    console.log((array[(array.length-2)/2]+array[array.length/2])/2);
}}
median([1,5,8,3,7,6,9,4,2,0]);
