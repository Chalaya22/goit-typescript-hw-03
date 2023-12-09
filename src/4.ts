class Key {
  private signature: number;

  getSignature(): number {
    return (this.signature = Math.random());
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return key;
  }
}

abstract class House {
  constructor(
    protected door: boolean,
    protected key: Key,
    protected tenants: Person[]
  ) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }
  comeIn(person: Person): void {
    this.door === true && this.tenants.push(person);
  }
  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
