//reference type

const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

// context

const object4 = {
	a: function () {
		console.log(this);
	},
};


// instantiation
class Player {
  constructor(name, type) {
    console.log(this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {console.log(`WEEEE I'm a ${this.type} type` )}
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

console.log(wizard1)
console.log(wizard2.play())