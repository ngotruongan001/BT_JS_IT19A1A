console.log("Hello World!")
/*
Bài 15:
Viết chương trình nhập mảng 1 chiều A có N phần tử 
có sử hàm(với N nhập từ bàn phím). :
Xuất các phần tử đã nhập ra màn hình
Xuất ra màn hình các số chính phương của mảng A
*/ 

number = 9
var b =Math.pow(Math.sqrt(number),2)
var a =Math.sqrt(number);

console.log(a)
console.log(b)

function sosanh(a,b){
    if(a==b) return true;
    return false;
}

if(sosanh(number,b))
{
    console.log("SCP")
}
else{
    console.log("Không phải")
}