// Promise

// 3 state of promise: 1.Pending 2.Fulfilled 3.Reject
// 2 type of promise: Producer vs Consumer


// Promise 생성 (Producer) // When new Promise is created, the executor runs automatically.
const promiseTest1 = new Promise((resolve, reject) => {
    // heavy한 work (ex: network, read files)
    console.log("doing something...");

    setTimeout(() => {
        resolve("result is ...");
        reject(new Error("No work"));
    }, 2000);
}); // Promise 콜백함수의 인자는 resolve, reject // Promise에서 executor가 {}를 바로 실행한다.

// Consumer (then, catch, finally)
promiseTest1.then(value => {
    console.log(value); // resolve에 의한 result가 value로 들어온다.
});

// then에 catch적용
promiseTest1
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always Work");
    })

// Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber // num init: resolve에서 전달된 1
    .then(num => num*2) // num: 2
    .then(num => num*3) // num: 6
    .then(num => { // then은 값을 바로 전달할 수도 있지만, Promise를 전달할 수도 있다.
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); // num: 6-1=5가 된다.
        });
    })
    .then(num => console.log(num)); // console을 통해 num을 확인
