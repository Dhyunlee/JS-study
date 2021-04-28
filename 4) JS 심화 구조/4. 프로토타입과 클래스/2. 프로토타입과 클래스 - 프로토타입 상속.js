/*
[prototype 상속]
 객체 생성자 상속받기 
  : 기존의 객체 생성자 함수의 속성을 재사용하는 것을 말한다. 
*/
 
// [Animal객체 생성]
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

// Animal 객체에 속성 추가
Animal.prototype.animalNum = 1

// Animal 객체에 메서드[say()함수] 추가
Animal.prototype.say = function() {
  console.log(`${this.sound}! 소리내는 ${this.type}\(은/는\) 모두 ${this.animalNum}마리 입니다.  `);
};

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

/*
 call() 메소드는 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출합니다.
*/

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

// 상속 받기위해 프로토타입을 통해 공유 
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say(); 
