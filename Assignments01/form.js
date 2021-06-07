var do_height = document.getElementById("height")
var do_weight = document.getElementById("weight")

function check(){
    var weight = do_weight.value;
    var height = do_height.value/100;
    var ketQua = 0;
    var chuanDoan;
    var nguyCo;

    BMI =weight/(height*height)
    BMI = BMI.toFixed(2)
    
    if(height<=0||weight<=0){
        alert('Nhập sai vui lòng nhập lại')
               
    }
    else{
        if(BMI < 18.5) ketQua= 1
        if(BMI < 24.9 && BMI > 18.5) ketQua = 2
        if(BMI < 29.9 && BMI > 24.9) ketQua = 3
        if(BMI < 34.9 && BMI > 29.9) ketQua = 4
        if(BMI < 39.9 && BMI > 34.9) ketQua = 5
        if(BMI > 40) ketQua = 6
    }
    switch(ketQua){
        case 1:
            chuanDoan = "hơi gầy"
            nguyCo = "nguy cơ thấp"
            break;
        case 2:
            chuanDoan = "bình thường"
            nguyCo = "trung bình"
            break;
        case 3:
            chuanDoan = "hơi béo"
            nguyCo = "cao"
            break;
        case 4:
            chuanDoan = "béo phì cấp độ 1"
            nguyCo = "cao"
            break;
        case 5:
            chuanDoan = "béo phì cấp độ 2"
            nguyCo = "rất cao"
            break;
        case 6:
            chuanDoan = "béo phì cấp độ 3"  
            nguyCo = "nguy hiểm" 
            break;        
    }
    if(height>0 && weight>0) {
        alert("Chỉ số BMI: "+ BMI +'\n'+ 'Tình trạng cơ thể: '+ chuanDoan +'\n'+ 'Nguy cơ phát bệnh: ' + nguyCo)
    }
   
}
    



