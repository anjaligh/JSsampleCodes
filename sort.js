// num1=4;
// num2=5;
// function swap(num1,num2){
//     console.log("num1= "+num1)
//     console.log("num2= "+num2)
//     var num3=num1;
//     num1=num2;
//     num2=num3;
//     console.log("num1= "+num1)
//     console.log("num2= "+num2)
// }

// // // BUBBLE SORTING

// arrayIn = [16, 26, 3, 14, 6,87];
// len = arrayIn.length;
// console.log(len)
// for (j = 0; j < len; j++) {
//     for (i = 0; i < len - 1; i++) {
//         // console.log("len=" + len)
//         // console.log("i=" + i);
//         // console.log("input" + arrayIn)
//         if (arrayIn[i] > arrayIn[i + 1]) {
//             num = arrayIn[i];
//             arrayIn[i] = arrayIn[i + 1];
//             arrayIn[i + 1] = num;
//             // console.log(arrayIn)
//         }
//         console.log(arrayIn)
//         arrayIn = arrayIn;
//     }
// }

// //INSERTION SORT

arrayIn = [16, 26, 3, 14, 6,87];
len = arrayIn.length;
// console.log(len)
for(i=1;i<len;i++){
    for (j=i;j>0;j--){
        // console.log(arrayIn[j-1]);
     if(arrayIn[j]< arrayIn[j-1]){
         num=arrayIn[j]
         arrayIn[j]=arrayIn[j-1]
         arrayIn[j-1]=num;
        //  console.log(arrayIn)
     }   
        
    }
    console.log(arrayIn)
}
