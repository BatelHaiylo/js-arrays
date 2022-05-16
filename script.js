// var names = ["Batel","lior","Shlomo","Ran","Netanel"];
// console.log(names);
// console.log(names[2]);
// for(var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// var numbers = [100,200,300,400,500,600,700]
// console.log(numbers);
// console.log(numbers[3]);
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


// var numbers = [0,10,15,20,25,30,35,40,45,50,]
// console.log(numbers);
// for (number of numbers){
//     if(number%2==0){
//         console.log(number);
//     }
// }

// var myArray = ["hello",2,"world","jacob",6,7,"bye",98]
// for (i=0; i<myArray.length; i++){
//     if ( typeof myArray[i] !== Number){
//         console.log(myArray[i]);
//     }
// }

// var myArray = ["hello",2,"world","jacob",6,7,"bye",98]
// for (i=0; i<myArray.length; i++){
//     if (myArray[i] * 1 != myArray[i]){
//         console.log(myArray[i]);
//     }
// }

// var myArray = ["hello",2,"world","jacob",6,7,"bye",98]
// for (i=0; i<myArray.length; i++){
//     if (myArray.includes(" ")){
//         console.log(myArray[i]);
//     }
// }


// var hotRate = [];
// hotRate.push(9);
// console.log(hotRate);

// var numbers = []
// for(i=0; i<10; i++){
//     numbers.push(i)
// }
// console.log(numbers)

// var sumArray = [5,3,7,8,11]
// var sum = 0
// for(i=0; i<sumArray.length; i++){
//     sum+=sumArray[i];
// }
// console.log(sum)
// console.log(sum/sumArray.length)

// var names = ["Batel", "Tom", "Ofir", "Africa", "Asia"]
// for (name of names){
//     console.log(name)
// }

// function cheakIfInArray (array, num){
//     for(i=0; i<array.length; i++){
//         if (num == array[i]){
//             return true
//         }
//     }
//     return false
// }

// function getEvenArrayNum (array){
//     var sum = 0
//     for(i=0; i<array.length; i++){
//         if(array[i]%2==0){
//             sum++
//         }
//     }
//     return sum;
// }

//   function copyIfSameArrayLength (array1, array2){
//       if (array1.length == array2.length){
//           array1 = [...array2]
//           return true;
//       }
//       return false;
//   } 

// function organizeArray (array){
//     for (i=0; i<array.length; i++){
//         if (array[i]<array[0]){
//             var smallNum = array.pop(array[i])
//             array.unshift(smallNum)
//         }
//     }
//     return array
// }

// function organizeArray (array){
//     for (i=0; i<array.length; i++){
//         for(j=0; j<array.length; j++){
//             if(array[i]<=array[0]){
//                 var smallNum = array.pop(array[i])
//                 array.unshift(smallNum)
//             }
//         }
//     }
//     return array
// }

// function organizeArray (array){
//     for(var i=0; i<array.length; i++){
//         if( array[i]>array[i+1]){
//             array.push(array.splice(i, 1)[0]);
//             i=-1;
//         }
//     }
//     return array
// }

function maxOrgan (array){
     var max = array[0]
     for(i=0; i<array.length; i++){
         if (max<=array[i]){
            max = array[i]
        }
    }
    return max;
}


// function getArray(array){
//     var min = array[0]
//     for (var i=0; i<array.length; i++){
//         if(min>=array[i]){
//             min = array[i]
//         }
//     }
//     return array.indexOf(min);
// }
// getArray([1,-1,8,5,47])

function minNumber(array){
    var min = array[0]
    for(var i=0;i<array.length;i++){
        if(min>=array[i]){
            min=array[i]
        }
    }
    return array.findIndex(min);
}
minNumber([8,5,3,1,6,7])

// function getSumOfArray(array){
//     var sum = 0
//     for(i=0; i<array.length; i++){
//         sum+=array[i]
//     }
//     return sum
// }

// function getSumOfArray(array){
//     return array.reduce
// }

// function getMaxMultipliedMin(array){
//     var max = maxOrgan(array)
//     var min = minNumber(array)
//     return max*min
// }

// function maxEvenNumIndex (array){
//     var max = array[0]
//     for(i=0; i<array.length; i++){
//         if((max<=array[i]) && (array[i]%2==0)){
//             max = array[i]
//         }
//     }
//     return array.indexOf(max)
// }

// function sumOfOddOrgains (array){
//     var sum =0
//     for(i=0; i<array.length; i++){
//         if(array[i]%2!=0){
//             sum+=array[i]
//         }
//     }
//     return sum
// }


// function addOrgainToEndArray (array, name){
//     array.push(name);
//     return array
// }


// function addOrgainToStartArray (array, email){
//     array.unshift(email)
//     return array
// }

// function addOrgainOddEven (array, num){
//     if (num%2==0){
//         array.unshift(num)
//     }
//     array.push(num)
//     return array
// }

function ArrayReduction (array,num){
    if(num<array.length){
        array.pop(num)
    }
    return array
}
