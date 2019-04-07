class Person {
  constructor(nameStr, aliveBool, genderBool) {
      this.name = nameStr;
      this.isAlive = aliveBool;
      this.isLady = genderBool;
      this.children = [];
  }
}

const lyanna = new Person('lyanna', true, true)

class Monarchy {
  constructor() {}

  // finds person w/ given name value and adds a new Person as a child
  birth(name, child) {
    let parent = this.search(name);
    if (parent) parent.children.push(child);
  } 

  // finds a person w/ given name value and 'kills' them
  death(name){
    let person = this.search(name);
    if (person) person.isAlive = false;
  }

  //return a person base on his/her name
  search(name){
    let queue = [lyanna];
    while (queue.length){
      let person = queue.shift();
      if (person.name === name) return person;
      queue.push(...person.children);
    }
    return null;
  }

  //Prints the order of Succession
  printSuccession() {
    let queue = [lyanna];
    while (queue.length){
      let person = queue.shift();
      if (person.isAlive) console.log(person.name);
      let daughters = person.children.filter(child => child.isLady);
      queue.push(...daughters);
    }
  } 
}

const d1 = new Person('d1', true, true);
const d2 = new Person('d2', true, true);
const d3 = new Person('d3', true, true);
const d4 = new Person('d4', true, true);
const d5 = new Person('d5', true, true);
const d6 = new Person('d6', true, true);
const s1 = new Person('s1', true, false);
const s2 = new Person('s2', true, false);
const s3 = new Person('s3', true, false);

let monarchy = new Monarchy();
monarchy.birth('lyanna', d1);
monarchy.birth('lyanna', d2);
monarchy.birth('lyanna', d3);
monarchy.birth('d1', d4);
monarchy.birth('d2', s1);
monarchy.birth('d3', d6);
monarchy.birth('d5', s1);
monarchy.birth('s2', s3);
monarchy.printSuccession();
monarchy.death('d1');
monarchy.printSuccession();
