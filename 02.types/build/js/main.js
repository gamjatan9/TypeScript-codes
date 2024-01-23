"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
//String
let string;
let firstName = 'Doe';
//Array
//한 가지 타입만 가지는 배열
let names1 = ['Kim', 'Lee'];
let names2 = ['Kim', 'Park'];
//여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['Kim', 'Park', 1, 2];
let array2 = ['Kim', 'Park', 1, 2];
//여러 타입을 단언 X any
let someArray = ['Kim', 1, [], {}, false];
//Interface, Type
//읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// stringArray.push('C');
// numberArray[0] = 3;
//Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a']
let users;
users = [[1, 'a'], [2, 'b']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
//any
let any = 'abc';
any = 1;
any = [];
//unknown
let unknown = false;
//let string1: string = unknown; // error
let string2 = unknown; // 타입 단언
//Object
let obj = {};
let arr = [];
//let nul: object = null; //err: tsconfig에서 strict 설정 때문에 null 할당하지 못함
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title',
    description: 'description',
};
//Union 
let union;
union = 'hi';
union = 123;
//union = []; // error
//Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2; //return 이 없을 때는 void 타입 
func2 = function () {
    console.log('hi');
};
// Null, Undefined
// let number1: number = undefined;
// let string9: string = null;
// let object: { a: 10, b: false} = undefined;
let void2 = undefined;
//void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
//never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log(hi);
    }
}
