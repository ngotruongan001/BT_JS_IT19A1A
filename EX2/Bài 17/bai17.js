/**Bài 17:
    Viết chương trình nhập mảng 1 chiều A có N phần tử có sử
    dụng hàm(với N nhập từ bàn phím). :
    Xuất các phần tử đã nhập ra màn hình
    Xuất ra màn hình các số hoàn hảo của mảng A?
 */
console.log("Hello World!")

function checkNumber(number1,number2){
    if(number1==0||number2==0) return false;
    if(number1==number2) return true;
    return false;
}

function tongUoc(number){
    var tong = 0;
    for(var i =1;i<number;i++){
        if(number%i==0) tong+=i;//tong = tong + i
    }
    return tong;
}

//tạo mảng
var array = [1,496,3,4,5,5,5,28,1,6,12,13,15]

console.log(array)

for(var i of array){
    if(checkNumber(i,tongUoc(i))) {
        console.log(i)
    }
}