var do_height = document.getElementById("height")
var do_weight = document.getElementById("weight")

function btnClick(){
    var weight = do_weight.value;
    var height = do_height.value/100;
    BMI = weight/(height*height)
    console.log(BMI)
    document.getElementById("result").innerHTML = BMI;
    var chuanDoan;
    var nguyCo;
    if(height<=0||weight<=0 ){
        document.getElementById("result").innerHTML = "Eror";
    }
    else{
        if(BMI<18.5){
            chuanDoan = "Hơi gầy"
            nguyCo = " Nguy Cơ Thấp"
        }else{
            if(BMI<24.9){
                chuanDoan = "Bình thường"
                nguyCo = " Trung bình"
            }
            else{
                if(BMI<29.9){
                    chuanDoan = "Hơi béo"
                    nguyCo = " Cao"
                }else{
                    if(BMI<34.9){
                        chuanDoan = "Béo phì cấp độ 1"
                        nguyCo = " Cao"
                    }
                    else{
                        if(BMI<39.9){
                            chuanDoan = "Béo phì cấp độ 2"
                            nguyCo = " Rất cao"
                        }else{
                            chuanDoan = "Béo phì cấp độ 3"  
                            nguyCo = " Nguy Hiểm"
                        }
                    }
                }
            }
        }
        document.getElementById("result").innerHTML = "Chỉ số " + chuanDoan + " : "+ BMI + ', Nguy cơ phát bệnh: ' + nguyCo;
    }
}