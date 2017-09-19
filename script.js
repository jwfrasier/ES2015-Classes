// WARM UP!

// 1
//  WRITE A CONSTRUCTOR FUNCTION
// Write a basic Dog() constructor function with the following properties set to 'true'; barks and wagstail.
// Write your code below:

// Create an instance of Dog.
// Define your variable, fido.
// Write your code below:


// Print fido barks. It should print true.
// It should prin, true.
// Write your code below:


// 2
// CLASS DECLARATION
// Declare a DogClass class.
// It should have the following properties set to 'true'; barks and wagstail.
// Write your code below:

class DogClass {
  constructor() {
    this.barks = true
    this.wagstail = true
  }
}
const fido = new DogClass()
console.log(fido.barks)
console.log(fido.wagstail)

// Create an instance of DogClass()
// Define your variable, spike
// Write your code below:
const spike = new DogClass()
console.log(spike.wagstail)
// Print spike wagstrail.
// It should print, true.
// Write your code below:


// 3
// EXTENDS
// DECLARE A SUBJECT CLASS
// It should have the property of 'requiresBooks' set to 'true'.
// Write your code below:
class subject {
  constructor(requiresBooks = true) {
    this.requiresBooks = requiresBooks;
  }
}

// DECLARE A SUB-CLASS MATH
// Extend from Subject
// It should inherit requiresBooks
// It should have an additional property of 'requiresCalculator ' set to 'true'.
// Write your code below:
class Math extends subject {
  constructor(requiresCalculator = true, requiresBooks = true) {
    super(requiresBooks)
    this.requiresCalculator = requiresCalculator
  }
}

// Declare a 'math' variable, creating an instance of Math
// Write your code below:
const math = new Math()

//Print math
// It should print: "Math {requiresBooks: true, requiresCalculator: true}"
// Write your code below:
console.log(math)

//4
// SUB-CLASS
// DECLARE A SUBCLASS OF GEOMETRY
// Extend from Math
// It should have an additional property of 'requiresRuler' set to true.
// Write your code below:
class Geometry extends Math {
  constructor(requiresCalculator = true, requiresBooks = true, requiresRuler = true) {
    super(requiresBooks, requiresCalculator)
    this.requiresRuler = requiresRuler
  }
}

// Declare a 'geometry' variable, creating an instance of Geometry
// Write your code below:
const geometry = new Geometry()

// Print geometry
// It should print: "Geometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true}"
// Write your code below:
console.log(geometry)

//5
// SUB-CLASS
// DECLARE A SUBCLASS OF TRIGONOMETRY
// Extend from Geometry
// The constructor should have a parameter of 'specialCalculator'
// Set the value of specialCalculator equals to specialCalculator so you can pass this value when you create an instance of Trigonometry.
// Write your code below:
class Trigonometry extends Geometry {
  constructor(specialCalculator) {
    super(true, true, true)
    this.specialCalculator = specialCalculator
  }
}

// Declare a 'trigonometry' variable, creating an instance of Trigonometry, passing in an argument of 'Ti-83'.
// Write your code below:

const trigonometry = new Trigonometry('Ti-83')
// Print trigonometry
// It should pring: "Trigonometry {requiresBooks: true, requiresCalculator: true, requiresRuler: true, specialCalculator: "Ti-83"}"
// Write your code below:
console.log(trigonometry);

//6
// SUB-CLASS
// DECLARE A SUBCLASS OF CALCULUS
// Extend from Trigonometry
// The constructor should have a parameter of 'requiresRuler' and 'specialCalculator'
// In should inherit 'requiresRuler' and 'specialCalculator'
// Calculus does not require a ruler, so set that property to 'false'. It does require a special calculator, the 'Ti-89'
// Write your code below:

class Calculus extends Trigonometry {
  constructor(specialCalculator) {
    super(true, true, false, specialCalculator)
    this.specialCalculator = 'Ti-89'

  }
}
// Declare a variable of 'calculus', creating an instance of Calculus, passing in a boolean of 'false'
// Write your code below:
const calculus = new Calculus(false)
console.log(calculus)
// Print calculus
// It should print: "Calculus {requiresBooks: true, requiresCalculator: true, requiresRuler: false, specialCalculator: "Ti-89"}"
// Write your code below:
