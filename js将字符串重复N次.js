//使用javascript编写一个实现字符串重复的repeat函数：
//例如：
repeat("abc",4)   //abcabcabcabc  

//方法一：
function repeat(src, n) {  
    return (new Array(n + 1)).join(src);  
}  

//方法二：
function repeat(src, n) {  
    var s = src, total = "";  
    while (n > 0) {  
        if (n % 2 == 1) {  
            total += s;  
        }  
        if (n == 1) {  
            break;  
        }  
        s += s;  
        n = n/2;  
    }  
    return total;  
}  

//方法三：递归
function repeat(src, n) {  
    return (n > 0) ? src.concat(repeat(src, --n)):"";  
}  

