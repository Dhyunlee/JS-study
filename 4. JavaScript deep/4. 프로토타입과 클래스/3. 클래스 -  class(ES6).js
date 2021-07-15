/* class */
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dog = new Dog('멍멍이','멍멍~')
const cat = new Cat('야옹이','야옹~')

dog.say();
cat.say();
