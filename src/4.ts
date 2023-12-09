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
  protected door: boolean;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
    this.key = key;
  }

  abstract OpenDoor(key: Key): void;

  comeIn(person: Person): void {
    this.door === true && this.tenants.push(person);
  }
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    key.getSignature() === this.key.getSignature() && this.door === true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
