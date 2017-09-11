// 方法一：unshift()方法
function symNum1(start,end){
	for(var i=start;i<=end;i++){
		var str=i.toString(),
			len=str.length;
		var arr=str.split(""),
			rev=[];

		for(var j=0;j<len;j++){
			rev.unshift(arr[j]);
		}
		var rev_str=rev.join("");
		if(rev_str==str)
			console.log(i);
	}
}
// 方法二 reverse()方法
function symNum2(start,end){  
    for(var i=start;i<=end;i++){  
        var rev_num=+(i.toString().split("").reverse().join(""));  
          
        if(rev_num===i){  
            console.log(i);  
        }  
          
    }  
}  

// 方法三 charAt()方法逐个判断
function symNum3(start,end){  
    var flag;  
    for(var i=start;i<=end;i++){  
    	flag=true;  
        var str=i.toString();  
        for(var j=0,len=str.length;j<len/2;j++){  
            if(str.charAt(j)!==str.charAt(len-1-j)){  
                flag=false;  
                break;  
            }  
        }  
        if(flag==true){  
            console.log(i);  
        }  
          
    }  
}  
symNum1(1,1000);
symNum2(1,1000);
symNum3(1,1000);