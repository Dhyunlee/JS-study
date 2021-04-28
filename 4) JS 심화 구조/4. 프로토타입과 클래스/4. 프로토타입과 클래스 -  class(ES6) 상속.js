/*
 [class타입 상속]
class타입은 상속을 할 때 extends 키워드를 사용하며, constructor에서 사용하는 
super() 함수가 상속받은 클래스의 생성자를 가르킵니다.
*/
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

// 상속 받기 
class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound) 
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound) 
    }
}
const dog = new Dog('멍멍이','멍멍~')
const cat = new Cat('야옹이','야옹~')


dog.say();
cat.say();


// 프로토타입으로도 구현해보기, 
// 다른 클래스도 만들어보자 (응용해보기)!!
