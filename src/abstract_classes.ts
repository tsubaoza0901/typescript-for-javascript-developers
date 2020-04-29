export {};

abstract class Animal {
  abstract cry(): string;
}

class Cat extends Animal {
  cry() {
    return 'meow';
  }
}

class Dog extends Animal {
  cry() {
    return 'woof woof';
  }
}
