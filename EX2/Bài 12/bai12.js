//Viết chương trình nhập mảng một chiều A với n phần tử <br>
//(n>=15).Xuất mảng A ra màn hình      
//Xuất ra các số chia hết cho 5.

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function chiahetcho5(array){
    var b = []
    for (const a of array) {
        if(a%5===0){
            b.push(a)
        }
    }
    return b
}

console.log(chiahetcho5(array))
