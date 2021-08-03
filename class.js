'use strict'

class Dog {
    constructor(name,color){
        this.name = name
        this.color = color
    }
    bark(){
        return "Woof! Woof!"
    }

}

let dog = new Dog('Johnny','Black')

console.log(dog.bark())