var do_soNguyen = document.getElementById("songuyen")
function kiem_tra_snt()
{
    var n= do_soNguyen.value;

    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        document.getElementById("result").innerHTML= n + " là số nguyên tố <br/>";
    }
    else{
        document.getElementById("result").innerHTML= n + " không là số nguyên tố <br/>";
    }
}