console.log("Hello World!")
/*
 In ra màn hình dãy số Fibonaxi nhỏ hơn với N nhập từ bàn phím. Biết rằng dãy Fibonaxi có dạng như sau: Fn=Fn-1+Fn-2 với F1=1, F2=1.
*/ 

var number = 5;
var f1 = 1
var f2 = 1
console.log(f1+"\n"+f2)

for(var i = 0;i<number-2;i++){
    var tg=  f1
    f1 = f2 
    f2 +=tg
    console.log(f2)
}

//cách 2 đệ quy
console.log("--------------------------------------------")
//tính số fibonaxi tại vị trí i
function fibonaxi(number){
    if(number ===1 || number ===0) return 1
    return fibonaxi(number-1) + fibonaxi(number-2)
}
for(var i = 0;i<number;i++){
    console.log(fibonaxi(i))
}