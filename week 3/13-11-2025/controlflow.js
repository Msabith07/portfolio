// let a = prompt("Enter yyour age: ");
// console.log(`your age is ${a}`);
// if(a>18){
//     alert("he is old");3
// }
// else{
//     alert("he is young");
// }
let date= new Date().getDay();
switch(date){
    case 1 :
        alert("its monday");
        break;
    case 2 :
        alert("its tuesday");
        break;
    case 3 :
        alert("its wednesday");
        break;
    case 4 :
        alert("its thursday");
        break;
    case 5 :
        alert("its friday");
        break;
    case 6 :
        alert("its saturday");
        break;
    case 0 :
        alert("its sunday");
        break;
}
console.log("you can", (date==5)? "enjoy":"wait till friday")