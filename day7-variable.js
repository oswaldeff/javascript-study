// object

// let
let user1 = {
    name: "oswaldeff",
    age: 31,
    sex: "M",
}; // user객체 생성

let user2 = user1;

user1.name = "anonymous";

console.log(user1.name); // anonymous return

console.log(user2.name); // anonymous return, user2는 obejct를 통해 reference가 복사된 객체이므로 user2의 name이 가리키는 값은 anonymous이다.

// const
const user3 = {
    name: "grace",
    age: 29,
    sex: "F"
};

user3.name = "anonymous";

console.log(user3.name); // anonymous return, object에 한하여 const는 참조하는 객체내부의 변동이 가능하다.
