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

let goat = Object.create(Object.prototype,
    {
        name: {
            value: 'Jecinta',
            enumerable: true,
            writable: true,
            configurable: true
        },
        color: {
            value:'White',
            enumerable: true,
            writable:true,
            configurable:true
        }
    })

    console.log(goat.name)