// async & await

// 1. async
function loginUser() {
    return new Promise((resolve, reject) => {
        resolve("oswaldeff");
    });
}

const user = loginUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

// bad example!
async function getToken() {
    await delay(1000);
    return "abcd1234";
}

async function getUserName() {
    await delay(2000);
    return "qwer4321";
}

function login() {
    return getToken().then(token => {
        return getUserName().then(userName => '${token} ${userName}');
    }); // 콜백지옥
}

login().then(console.log);


// good example!
async function login() {
    const token = await getToken();
    const userName = await getUserName();
    return '${token} ${userName}';
}

login().then(console.log);

// 병렬처리
async function login() {
    const tokenPromise = getToken(); // 해당 line에서 promise생성하여 실행
    const userNamePromise = getUserName(); // 해당 line에서 promise생성하여 실행
    const token = await tokenPromise;
    const userName = await userNamePromise;
    return '${token} ${userName}';
}

// 병렬처리 with Promise API
async function login() {
    return Promise.all([getToken(), getUserName()])
        .then(user => user.join('')
    );
}
login().then(console.log);
