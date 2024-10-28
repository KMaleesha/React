class student {
    constructor(name, age, school){
        this.age = age;
        this.name = name,
        this.school = school;
        console.log('a new studnet');
    }
}

const myStudnet = new student;

class Rectangle {
    constructor(hight, width, color){
        this.hight = hight;
        this.width = width;
        this.color = color;
        console.log("this is a rectangle");
    }

    getArea(){
        return this.width*this.hight;
    } 

    get area(){
        return this.width*this.hight;
    }
}

const newRectangle = new Rectangle(20, 100, 'green');
console.log(newRectangle.getArea());
console.log(newRectangle.area);


class Square{

}