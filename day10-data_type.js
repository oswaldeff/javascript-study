// let
let name // [][][][], name이라는 variable로 메모리할당

// block scope
    // global variable
let globalActor = "daniel";
console.log(globalActor); // daniel출력
    // variable in scope
{
    let actor = "oswaldeff";
    console.log(actor); // oswladeff출력
    console.log(globalActor); // daniel출력
    
    actor = "renamedActor"; // renamedActor
    console.log(actor);
} 
//console.log(actor); // error!

// const: constants variable :: 'emutable'
// 아래의 세가지 관점에서 const사용 권장
// 1. security, 외부에서의 access를 통해 변동가능한 부분을 차단
// 2. thread safety, thread에서 특정variable이 변하는것을 방지
// 3. reduce human mistakes
const daysInWeek = 7;
console.log(daysInWeek);
//daysInWeek = 10; // error!

// 'template literals' OR 'template string' like 파이썬의 f-string
const sentence = `I already works ${daysInWeek}days` // 백틱사용
console.log(sentence);

// symbol, create unique identifiers for objects, 고유한 식별자를 부여할 때 사용
const PK1 = Symbol('1');
const FK1 = Symbol('1');
console.log(PK1 === FK1); // 출력결과 false, 동일한 string값이어도 다른값이 부여
const PK2 = Symbol.for('2');
const FK2 = Symbol.for('2');
console.log(PK2 === FK2); // 출력결과 true, 동일한 값을 부여하기 위해서는 for사용
// 부여된 값을 확인하려면 Symbol로 부여된 variable에 description으로 출력해본다.
console.log(PK2.description);
