var array = [5,1,22,3,5,12,2,6,4]
console.log(array)

// 5,1,22,3 => 22 1 5 3 => 22 5 1 3 => 22 5 3 1 => 22 5 3 1

// for(var i = 0;i<array.length;i++){
//     for(var j = i+1;j<array.length;j++){
//         if(array[i]<array[j]){
//             var tg = array[i]
//             array[i] = array[j]
//             array[j] = tg
//         }
//     }
// }

array.sort(function(a,b){return b-a})
console.log(array)
