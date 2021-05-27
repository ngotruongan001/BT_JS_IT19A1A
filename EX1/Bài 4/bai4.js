var array = [1,2,3,4,5,6,7,10,20,28,26,8128];

//tạo hàm tính số hoàn hảo
var tongUoc = function(number){
    var tong = 0;
    for(var i = 1;i<number;i++){
        //ước của number
        if(number%i==0) tong+=i;
    }
    return tong;
}
//tạo hàm kiểm tra
var checkNumber = function(number,TUoc){
    if(number===TUoc) return true;
    return false;
}
for(var i of array){
    if(checkNumber(i,tongUoc(i))){
        console.log(i+" là số hoàn hảo");
    }
}