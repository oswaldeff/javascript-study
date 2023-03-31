// object

// object literal
const object1 = {};

// object constructor
const object2 = new Object();

//
const loginUser = {
  name: "oswladeff",
  age: "31",
  sex: "M",
};

loginUser.city = "seongnam"; // Javascript는 런타임 언어이기 때문에 const이지만 object property 추가 및 값 할당가능
console.log(loginUser);
delete loginUser.city;
console.log(loginUser);

// key값으로 object의 property에 대응된 value 출력
console.log(loginUser["name"]);

// key값으로 property추가
loginUser["city"] = "seongnam";
console.log(loginUser["city"]);

// object 동적 관리
function printLoginUserProperty(obj, property) {
  console.log(obj[property]);
}
printLoginUserProperty(loginUser, "city");

// in operator: property existence check (key in ojb)
console.log("age" in loginUser); // 출력결과 true return

// for..in vs for..of
for (key in loginUser) {
  console.log(key);
}

const arr = [1, 2, 3, 4, 5];
for (val of arr) {
  console.log(val);
}
