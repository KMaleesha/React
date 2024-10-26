function greetMe(name){
    return "Hey " + name + '!';
}
console.log(greetMe('Maleesha'));

// write using arrow function
 const greetYou = (yourName) => {
    return "Nice to meet you " + yourName + '!';
 }
 console.log(greetYou('Nimal'));

 function addTwoNumbers(number1, number2){
    return number1+number2;
 }
 console.log("sum is " + addTwoNumbers(10,45));

 // first method
 const addThreeNumbers = (num1, num2, num3) => {
    return num1+num2+num3;
 } 
 console.log("sum of three numbers "+ addThreeNumbers(1,34,67));

// second method
 const addnumbers = (a, b) => a+b;
 console.log(addnumbers(10,53));

 // third method
 function getsum(a,b,c){
    return arguments;
 }
 console.log(getsum(10, 20, 30));
 // you can no return argument in arrow function
 const getSum = (num1, num2, num3) =>{}