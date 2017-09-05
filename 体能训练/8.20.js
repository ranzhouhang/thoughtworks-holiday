/*判断一个字符串中出现次数最多的字符，并统计次数
 *例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
 *例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */

function getmaxitem(str) {
    let result = str.split('');
    let res = [];
    result.filter(
        item => {
            res.some(value => value.item === item) ? res.find(value => value.item === item).count++ : res.push({
                item,
                count: 1
            })
        }
    )

    let count = [];
    res.forEach(
        item => {
            count.push(item.count)
        }
    )
    let num = Math.max(...count)
    res.forEach(
        item => {
            if (item.count === num) {
                console.log(item.item + ':' + num)
            }
        }
    )
}
getmaxitem('abcsbaddbizdbas');
getmaxitem('aaaaabbdbdbb');




