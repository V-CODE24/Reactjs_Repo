// in js classes are a way to define bluePrint for creating objects (not the object from previous class like the key value objects)
//Class ke andar area function and paint function
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log("color isf " +  this.color);
  }
}

const rect = new Rectangle(2, 4,"red"); //rect is an object  on which we can call the area function and paint function in this code .. the width and other gets or can say this. variable is equal to rect variable ....is attached to rect
//it can be said as instance of a rectangle class or object of the recrangle
// console.log(rect.width * rect.height); // It is same as we doing rect.area() which is below this line

const rect2 = new Rectangle2(20, 40,"blue"); //rect2 is an object  on which we can call the area function and paint function in this code .. the width and other gets or can say this. variable is equal to rect variable ....is attached to rect
const area = rect.area();
const area2 = rect2.area();
rect.paint();
console.log(area);
//this. gives us access to current object inside the methods
//area and print are Methods and width,heigth and color are properties and the properties area attached to the object