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
    });
}

login().then(console.log);
