/*
Bài 16:
Viết chương trình nhập vào số nguyên N và sau đó in ra số
đảo của N? Ví dụ: N=12345. In ra 54321.
*/

var number = 123456

console.log(sodoixung(number))

function sodoixung(number){
    var chua = number
    var numberDX = 0
    while(chua!=0){
        numberDX = numberDX*10 +chua%10 
        chua = Math.floor(chua/10);
    } 
    return numberDX
}