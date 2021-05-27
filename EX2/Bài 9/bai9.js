//1 + x + (x^2)/2 + (x^3)/3 +...+ (x^n)/n
//1,1+2,1+2+(4/2)

var n = 2
var x = 3


var tim = function(n,x){
    var tong = 1
    for(var i = 1;i<=n;i++){
        tong += (Math.pow(x,i)/i);
    }
    return tong;    
}
console.log(tim(n,x))