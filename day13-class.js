// class
class Car {
  constructor(brand, series, year) {
    this.brand = brand;
    this.series = series;
    this.year = year;
  }
}

const EV9 = new Car("kia", "ev9", 2023);

// getter and setter
class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  get name() {
    // class 내부에 getter 존재
    return this._name;
  }

  set name(value) {
    // class 내부에 setter 존재
    this._name = value;
    return this._name;
  }
}

const loginUser = new User("oswaldeff", "oswaldeff@gmail.com", "01012349876");
console.log(loginUser);

// static properties: object에 상관없이 class 자체에서 일관된 속성값을 가지게 할 경우 사용한다.
class Account {
  static contractAccount = "toss";
  constructor(owner, number) {
    this.owner = owner;
    this.number = number;
  }
}

const user1Account = new Account("kim", 314217209);

const user2Account = new Account("park", 213964731);

console.log(user1Account.contractAccount); // 출력결과 undefined, 예상했던 toss가 출력되지 않는다. class 자체에 할당된 property이기 때문에 Account로 접근해야한다.
console.log(Account.contractAccount); // 출력결과 toss return

// override & variety (inheritance)
class Desk {
  constructor(color, width, height, length) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.length = length;
  }
}

const Hansam = new Desk("brown", 1980, 400, 1230);

class MotionDesk extends Desk {
  constructor(autoModule, ...args) {
    super(...args);
    this.autoModule = autoModule;
  }

  toString() {
    return `MotionDesk use high quality motor of ${this.autoModule}`;
  }
}

const Desker = new MotionDesk("donwha", "blue", 2000, 450, 1200);
console.log(Desker);

// class check: instanceof
console.log(Desker instanceof MotionDesk); // 출력결과 true
console.log(Hansam instanceof MotionDesk); // 출력결과 false

// toString
console.log(Desker.toString());
