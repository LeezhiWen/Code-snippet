
// 方法一：遍历数组法：
// 思路：新建一个新数组，遍历传入数组，如果值不在新数组就加入该新数组中。
function uniqueItem (arr){ 
var arrNew = []; 
for(var i = 0,len=arr.length; i < len; i++){ 
    if (arrNew.indexOf(arr[i]) == -1) 
        arrNew.push(arr[i]); 
    } 
    return arrNew; 
}

// 方法二：排序后相邻去除法
// 思路：给传入数组进行排序，排序后相同值相邻，之后遍历时新数组只加入不与前一值重复的值。
function uniqueItem (arr){ 
    arr.sort(); 
    var arrNew=[arr [0]]; 
    for(var i = 0,len=arr.length; i < len; i++){ 
        if( arr [i] !== arrNew[arrNew.length-1]){ 
          arrNew.push(arr[i]); 
        } 
     } 
     return arrNew; 
}

// 方法三：对象的键值法
// 思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，如果不是则给对象新增该键并放入新数组。
function uniqueItem (arr){  
    var h{};     
    var arrNew[];   
    for(var i = 0,len=arr.length; i < len; i++){   
        if(!h[arr[i]]){  
            h[arr[i]] = true; 
            arrNew.push(arr[i]);  
        }  
    }  
    return arrNew;  
}  
// 方法四：采用es6中set和Array.from
// 思路：ES6中的set是一种新的数据结构，它可以接收一个数组或者是类数组对象，自动去重其中的重复项目。
// Array.from方法可以把set数据结构转换为数组

let arrNew = Array.from(new Set(arr));
