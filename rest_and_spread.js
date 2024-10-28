// spread operator
const arr1 = [1,2,3];
const arr2 = ['x', 'y', 'z'];
console.log(arr1, arr2);

function sum(a, b, c){
    console.log(a + b + c);
}

sum(arr1[0], arr1[1], arr1[2]);
sum(...arr1);

// example to combine an array
const array1 = [1,2,3,4];
const array2 = [10, 20, 30, 40];
const array3 = [...array1,...array2];
console.log(array3);

// combine objects
const obj1 = {
    name: 'kamala',
    age: 20,
};
const obj2 = {
    school: 'nimala',
    marks: 25
};
const obje3 = {...obj1,...obj2};
console.log(obje3);

// use arguments
function sum(x, y, z){
    console.log(x + y + z);
}
const array4 = [10, 20, 30];
const newObje = {
    p: 10,
    q: 20,
    r: 30,
};
sum(...array4);
sum(...Object.values(newObje));

// copy
const arrayOne = [1,2,3];
const arrayTwo = [...arrayOne];
arrayOne[0] = 10;
console.log(arrayOne, arrayTwo);

const objOne = {
    elementOne: 10,
    elementTwo: 20,
    elementThree: 30,
}
const objTwo = {...objOne};
objOne[ 'elementOne' ] = 20;
console.log(objOne, objTwo);

//  rest Operator
const arrayThree = [5,5,5,5,5,5,5,10,20,30,45,75];
function sum(...args){
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
    console.log(sum);
}

sum(...arrayThree);

const myArray = [1,2,3,4,5,6,7,8,9,10];
const [first, second, ...rest_argument] = myArray;
console.log(first);
console.log(second);
console.log(rest_argument);

const myObject = {
    one:10,
    two:20,
    three:30,
    four:40
};
const {one:x,two,...res_obj} = myObject;
console.log(x);
console.log(two);
console.log(res_obj);