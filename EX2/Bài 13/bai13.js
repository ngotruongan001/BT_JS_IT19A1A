/*Viết chương trình nhập mảng 1 chiều A có N phần tử có sử
dụng hàm(với N nhập từ bàn phím). :
Xuất các phần tử đã nhập ra màn hình
Xuất ra màn hình các số nguyên tố của mảng A
*/ 
console.log("Hello World!")

function checkNumber(number){
    if(number<=1) return false;
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0) return false;
    }
    return true;
}
function SNT(array){
    var b = []
    for (const a of array) {
        if(checkNumber(a)){
            b.push(a)
        }
    }
    return b
}

var array = [3,2,1,4,5,17,7,13,9,9,11,110,120];

console.log(array)
var newArr = SNT(array)
newArr.sort(function(a,b){return a - b})
console.log(newArr)