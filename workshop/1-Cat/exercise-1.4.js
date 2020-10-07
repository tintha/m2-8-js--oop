// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = "cat";
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 30;
    this.happiness = 500;
  }
  sleep = (sleepHours) => {
    this.tiredness = this.tiredness - sleepHours * 5;
    this.happiness = this.happiness + sleepHours * 2;
  };
  eat = (kibbles) => {
    this.hunger = this.hunger - kibbles / 5;
    this.happiness = this.happiness + kibbles * 1;
  };
  play = (playMinutes) => {
    this.loneliness = this.loneliness - playMinutes * 3;
    this.happiness = this.happiness + playMinutes * 3;
  };
  wait = (waitMinutes) => {
    this.tiredness = this.tiredness + waitMinutes / 2;
    this.hunger = this.hunger + waitMinutes;
    this.loneliness = this.loneliness + waitMinutes * 2;
  };
}

const boots = new Cat("Boots", "Siamese");
boots.wait(20);
console.log(boots);
