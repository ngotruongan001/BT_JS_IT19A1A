var array = [1,6,8,7,12,45,2,51,98,12,55,23,545]; 

//tạo hàm checkNumberPrime
function checkNumberPrime(number){
    if(number<=1) return false;
    for(var i = 2;i<=Math.sqrt(number);i++){
        if(number%i==0) return false;
    }
    return true;
}

//kiểm tra các phần tử trong mang
for(var i of array){
    if(checkNumberPrime(i)){
        console.log(i);
    }
}