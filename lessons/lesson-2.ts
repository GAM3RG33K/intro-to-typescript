// Types in Typescript
// 
// Primitives:
// Boolean : true, false
// Number : 10000,-200,3,4,5,1.0,-2,-0.25,-0.00000004
// String : "hello", "world", 'hello', "world", `hello ${userName}`
// 


// Structural Types:
// Object : { "name": "John", "age": 30}
// Array : [1,2,3], [true, false], ["hello", "world"]
// Function : function() {}, function(x, y), const fun = (x,y) => { x + y }

// Structural Root Primitive:
// null : typeof instance === "object"
// Tuple : (1,2,3),
// Enum : { a: 1, b: 2 }
// Any : any, Universal Type, any can be assigned to any other type
// Unknown : unknown, Type that is not known
// Literal : literal, Type that is explicitly defined
// Never : never, Type that never returns
// Union : a | b, Type that can be either a or b
// Custom : type name, Type that is defined by the user


// Implicit types
let age = 100 // number
let firstName = 'Angela' // string
let busy = true // boolean


// Explicit types
let ageTS: number = 100
let firstNameTS: string = 'Angela'
let busyTS: boolean = true



age = 200 // Allows re-assigning same type
firstName = "100" // Allows re-assigning same type
busy = false // Allows re-assigning same type

ageTS = 200 // Allows re-assigning same type
firstNameTS = "100" // Allows re-assigning same type
busyTS = false // Allows re-assigning same type



// Errors

age = "200" // Error, type mismatch
firstName = 100 // Error, type mismatch
busy = 3.14 // Error, type mismatch

ageTS = "200" // Error, type mismatch
firstNameTS = 100 // Error, type mismatch
busyTS = 3.14 // Error, type mismatch

