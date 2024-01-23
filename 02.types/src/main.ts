// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

//String
let string: string
let firstName: string = 'Doe';

//Array
//한 가지 타입만 가지는 배열
let names1: string[] = ['Kim', 'Lee']; 
let names2: Array<string> = ['Kim', 'Park'];

//여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['Kim', 'Park', 1, 2];
let array2: Array<string | number> = ['Kim', 'Park', 1, 2];

//여러 타입을 단언 X any
let someArray = ['Kim', 1, [], {}, false];

//Interface, Type

//읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('C');
// numberArray[0] = 3;


//Tuple
let tuple1:[string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a']

let users: [number, string][]
users = [[1, 'a'], [2, 'b']];

let tuple2: [string, number]
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);

//any
let any: any = 'abc';
any = 1;
any = [];

//unknown
let unknown: unknown = false;
//let string1: string = unknown; // error
let string2: boolean = unknown as boolean; // 타입 단언

//Object
let obj: object = {};
let arr: object = [];
//let nul: object = null; //err: tsconfig에서 strict 설정 때문에 null 할당하지 못함
let date: object = new Date();

const obj1: { id: number, title: string, description: string} = {
   id: 1,
   title: 'title',
   description: 'description',
}

//Union 
let union: (string | number)
union = 'hi';
union = 123;
//union = []; // error

//Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
   return x * y
}

let func2: () => void; //return 이 없을 때는 void 타입 
func2 = function () {
   console.log('hi');
}

// Null, Undefined
// let number1: number = undefined;
// let string9: string = null;
// let object: { a: 10, b: false} = undefined;

let void2: void = undefined;



//void
function greeting(): void {
   console.log('hi');
}

const hi: void = greeting()
console.log(hi) // undefined


//never
function throwError(): never {
   throw new Error('error');
}

function keepProcessing(): never {
   while (true) {
      console.log(hi);
   }
}