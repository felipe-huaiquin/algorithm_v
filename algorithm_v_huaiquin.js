// function resetNeg(arr){

//     for(var i = 0 ; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }

// console.log(resetNeg([1,2,-3,-1]))

// function moveAhead(arr){

//         arr.splice(0,1);
//         arr.push(0);

//     return arr;
// }

// console.log(moveAhead([1,2,3,4]));

// function returnInverse(arr){
    
//     var temp = 0;

//     for(var i = 0; i<arr.length/2; i++){

//         temp = arr[i];
//         arr[i] = arr[arr.length- i- 1];
//         arr[arr.length - i - 1] = temp;

//         [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]  // forma corta
//     }

//     return arr;
// }

// console.log(returnInverse([1,2,3,4]))

// console.log(returnInverse([1,2,3,4,5]))


// function repeatArr(arr){

//     arrnew=[];

//         for(var i = 0; i < arr.length; i++){
//             arrnew[2*i]=arr[i];
//             arrnew[2*i+1]=arr[i]

//         }

//     return arrnew;
// }

// OTRA ITERACION DE LO ANTERIOR
// function y(arr){

//     var arrnew=[];
  
//     for(var i = 0; i < arr.length; i++){
//       arrnew.push(arr[i]);
//       arrnew.push(arr[i]);
//     }
//     return arrnew;
// }
  
//   console.log(y([4,'Ulyses',42,false]))

// console.log(repeatArr([4,'Ulysses', 42, 'false']));