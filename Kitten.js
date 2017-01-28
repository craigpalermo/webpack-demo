import Cat from './Cat';

export default class Kitten extends Cat {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} the kitten mews in the color ${this.color}`);
  }
}