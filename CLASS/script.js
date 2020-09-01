'use strict';

// CLASS

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
        
    calcArea() {
        return this.height * this.width;
    }
}

//  1. Абстракция 
//  Концепция + Экземляры класс

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

//  2. Наследование 
//  Иерархия классов - классы наследуются по иерархии (extends + super)

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const colorRect = new ColoredRectangleWithText(3, 200, 'sometext', '#000' );

// console.log(colorRect);
console.log(colorRect.calcArea());
colorRect.showMyProps();