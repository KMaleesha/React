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

 const addThreeNumbers = (num1, num2, num3) => {
    return num1+num2+num3;
 } 
 console.log("sum of three numbers "+ addThreeNumbers(1,34,67));