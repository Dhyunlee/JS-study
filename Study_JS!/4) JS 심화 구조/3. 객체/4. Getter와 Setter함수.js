/* 
  Getter 와 Setter 함수 
   - Getter 함수: 특정 값을 조회할 때 우리가 설정한 함수로 연산된 값을 반환
   - Setter 함수: 특정 값이 변경될 때마다(= 입력을 받을 때마다) 설정되어 반환
    -> Getter 와 Setter 함수를 사용할 때, 호출할때 함수명만 입력해도 된다. 
*/

// Getter 함수
 const numbers = {
     a: 1,
     b: 2,
     get sum() {
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
     }
 };

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum)


// Setter 함수
const dog1 = {
 _name: '멍멍이',
 set name(value) {
   console.log('이름이 바뀝니다.' + value)  
   this._name = value;
 }
};

console.log(dog._name);
dog.name = '뭉뭉이';
console.log(dog._name);


/* Getter, Setter함수 활용 */
const dog2 = {
 _name: '멍멍이',
 get name() {
 console.log('_name을 조회합니다..');
 return this._name;
 },
 set name(value) {
   console.log('이름이 바뀝니다.' + value)  
   this._name = value;
 }
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

/* 응용 */
const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },

 get a() {
     return this._a;
 },

 get b() {
     return this._b;
 },
 set a (value) {
     this._a = value
     this.calculate();
 },
 set b (value) {
    this._b = value
     this.calculate();
 }
};

 console.log(numbers2.sum)
 numbers2.a = 5;
 numbers2.b = 7;
 numbers2.a = 9;
 console.log(numbers2.sum);
