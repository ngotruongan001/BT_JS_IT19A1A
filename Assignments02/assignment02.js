
var inputMoney = document.getElementById("money");
var tg = document.getElementById("months");
var lx = document.getElementById("lai");
var goc = inputMoney.value/tg.value;

var tonglai = 0.0;
var t =0;
var tGoc = 0;
var tong = 0.0;
var a = 1;
var lai = 0.0;

function myFunction() {
  // alert(lx.value/100)
var tien = inputMoney.value;
goc = parseFloat((tien/tg.value).toFixed(3));
  // alert(inputMoney.value +" "+tg.value)
  var table = document.getElementById("myTable");
  // alert(tien *(lx.value/(tg.value*100)))
  for(var i =0;i<=tg.value;i++){
    lai = Math.floor((tien + goc) *(lx.value/(tg.value*100)));
    if(i===0){
      var row = table.insertRow(a);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);

    cell1.innerHTML = document.getElementById("date").value;
    cell2.innerHTML = i;
    cell3.innerHTML = tien;
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    }
    else{
      if(tien<1) tien=0;
      tong = goc + lai;
      tonglai+=lai;

      var row = table.insertRow(a);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.innerHTML = document.getElementById("date").value;
      cell2.innerHTML = i;
      cell3.innerHTML = tien;
      cell4.innerHTML = goc;
      cell5.innerHTML = lai;
      cell6.innerHTML = tong;
    }
    a++;
    tien-=goc;
    }
    var tGoc = inputMoney.value;

    var laiGoc = tonglai +tGoc*1;

    // alert(tonglai+" +"+tGoc+" ="+laiGoc);
    var row = table.insertRow(a);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      
    cell1.innerHTML = "Tổng";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = tGoc;
    cell5.innerHTML = tonglai;
    cell6.innerHTML = laiGoc;
}


