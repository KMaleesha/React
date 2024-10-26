this.name = 'Maleesha';
this.age = 25;
console.log(this.name);

const nameObject = {
    myName : 'Tharuprabha',
    printName: function(){
        console.log(this.myName);
    }
}
nameObject.printName();

const addressObject = {
    address: 'Kuliyapitiya, Sri Lanka',
    printAddress : function(){
        console.log(this.address);
    }
}
addressObject.printAddress();

const ageObject = {
    age : '20',
    displayAge: function(){
        console.log(this.age)
    },
    printAge : () => {
        console.log(this.age); // here it not get the variable in the funtion, but the arrow function get the variable out of the function.
    }
}
ageObject.displayAge();
ageObject.printAge();