// for(let i=0; i<10; i++){
//     console.log(i)
// }

// let i =0;
// for(;i<5;){
//         console.log(i);
//         i++;

// }

// let n=prompt("enter a number");
// let sum=0;
// num=Number.parseInt(n);
// for(let i=1; i<=num; i++) {
//     sum+=i;
// }
// console.log(`sum of ${num} is : ${sum}`)
// console.log(i)    // wont give anything cause i is declared inside for loop its bloke scoped 
let obj={
    sabi:9,
    sabu:7,
    saba:5
}
let i;
for (i in obj){
    console.log(`key: ${i} value: ${obj[i]}`)
}