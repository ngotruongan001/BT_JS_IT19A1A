/*
    Bài 18:
    Viết chương trình tính N!!, với N nhập từ bàn phím.
    N chẵn: N!!=2*4*6*...*N.
    N lẻ: N!!=1*3*5*...*N
*/

var number = 5
var chan = 1
var le = 1
if(number%2==0){
    for(var i =1;i<=number;i++){
        if(i%2==0) {
            chan*=i;
        }
    }
console.log("Chẵn = "+chan)
}
else{
    for(var i =1;i<=number;i++){
        if(i%2!=0) {
            le*=i;
        }
    }
console.log("Lẻ = "+le)
}

