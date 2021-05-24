function getSum(num1, num2){
    return num1+num2;
}
console.log(getSum(3,4));


function getSum1(num1:number, num2:number):number{
    return num1+num2;
}
console.log(getSum1(33,4));


let mysum = function(num1:any,num2:any): any{
    if(typeof num1 == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1+num2;
}
console.log(mysum('3',2));


function getName(fName:string, lName:string):string{
    if(lName == undefined){
        return fName;
    }
    return fName+' '+lName;
}
console.log(getName('isuru','srimal'));


// function myVoid(){
//     ret
// }

