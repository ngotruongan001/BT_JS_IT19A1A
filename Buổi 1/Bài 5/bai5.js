console.log("Hello World");

var number = 12321;
var nb = number;
var numberDX = 0;

while(nb>0){
    numberDX= numberDX*10 + nb%10;
    nb = Math.floor(nb/10);
}

console.log("Number: "+number);
console.log("Number đối xứng: "+numberDX);
if(numberDX === number) console.log("là số đối xứng");
else{
    console.log("Không phải số đối xứng");
}
