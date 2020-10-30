/*
 [객체 생성자] 
  : 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은
    함수들을 구현 할 수 있게 해준다. 
   => 객체 생성자를 사용할 때는 함수 이름을 대문자로 시작하며, 
      새로운 객체를 만들 때는 new 연산자 앞에 붙여 주어야 한다.(= 객체 생성이라 함)  
*/

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

/*
프로토타입
 : 위 코드를 보면 type, name, sound의 값이 변하지만 dog, cat객체가 가지고 있는
  say()함수는 불필요하게 객체를 생성할 때마다 새로 만들어져서 this.say로
  설정되고 있다. 같은 객체를 사용하는 경우, 공통된 성질(값 혹은 함수들)을 사용할 
  수 있는 공간을 생성할 수 있는데 이러한 것을 프로토타입이라 한다. 
*/

function Animals(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animals.prototype.say = function() {
  console.log(this.sound);
};
Animals.prototype.sharedValue = 1;

const dog2 = new Animals('개', '멍멍이', '멍멍');
const cat2 = new Animals('고양이', '야옹이', '야옹');

dog2.say();
cat2.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);

/*
 프로토타입은 위와 같이 [생성자함수명].prototype.[원하는 키, 속성(메서드)] = 의 형태로 설정하여 사용할 수 있다. 
*/
