class Animal {
  #name;
  #species;
  #energy;

  static remainingAnimals = 0
  constructor(name,species,energy){
  Animal.remainingAnimals++ 
  this.#name = name;
  this.#species = species;
  this.#energy = energy;
  }

  get name(){
    return this.#name
  }

  get species(){
    return this.#species
  }

  get energy(){
    return this.#energy
  }

  set energy(value) {
    this.#energy = value;
  }

  attack(target){
    console.log(`${this.#name} in to attack ${target.name}`)

    if (target.energy === 0){
      console.log(`${this.#name} lose`)
    }else{
      target.energy -= 10; 
      console.log(`${target.name}'s energy: ${target.energy}`)
      console.log(`${this.#name}'s energy: ${this.#energy}`)
    }

    if (target.energy <= 0) {
      console.log(`${this.#name} wins! ${target.name} is out of energy!`);
      Animal.remainingAnimals--; 
    }
  }

  eat(){
      this.#energy += 10
      console.log(`${this.#name} eats and gains energy! ${this.#name}'s energy:${this.#energy}`)
    }


}


class Bird extends Animal {
  #canFly;
  constructor(name,species,canFly,energy = 100){
    super(name,species,energy)
    this.#canFly = canFly;
  }

  get canFly(){
    return this.#canFly
  }

  attack(target){
    console.log(`${this.name} swoops in to attack ${target.name}`)

    if (target.energy === 0){
      console.log(`${this.name} win! ${target.name} is out of energy!`)
    }else{
      target.energy -= 20; 
      console.log(`${target.name}'s energy: ${target.energy}`)
      console.log(`${this.name}'s energy: ${this.energy}`)
    }
  }
  eat(){
    this.energy += 10
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy:${this.energy}`)
  }

}

class Mammal extends Animal {
  #furColor
  constructor(name,species,furColor,energy = 200){
    super(name,species,energy,)
    this.#furColor = furColor
  }

  get furColor(){
    return this.#furColor
  }

  attack(target){
    console.log(`${this.name} lunges to attack ${target.name}!`)

    if (target.energy === 0){
      console.log(`${this.name} win! ${target.name} is out of energy!`)
    }else{
      target.energy -= 50; 
      console.log(`${target.name}'s energy: ${target.energy}`)
      console.log(`${this.name}'s energy: ${this.energy}`)
      if (target.energy <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
        Animal.remainingAnimals--; 
      }
    }
  }

  eat(){
    this.energy += 20
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy:${this.energy}`)
  }

}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name,species,coldBlooded,energy = 100){
    super(name,species,energy)
    this.#coldBlooded = coldBlooded
  }
  get coldBlooded(){
    return this.#coldBlooded
  }

  attack(target){
    console.log(`${this.name} lunges to attack ${target.name}!`)

    if (target.energy === 0){
      console.log(`${this.name} win! ${target.name} is out of energy!`)
    }else{
      target.energy -= 30; 
      console.log(`${target.name}'s energy: ${target.energy}`)
      console.log(`${this.name}'s energy: ${this.energy}`)
      if (target.energy <= 0) {
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
        Animal.remainingAnimals--; 
      }
      
    }
  }
  eat(){
    this.energy += 15
    console.log(`${this.name} eats and gains energy! ${this.name}'s energy:${this.energy}`)
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// // Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
