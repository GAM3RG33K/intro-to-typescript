// Types in Javascript
// 
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"


// Structural Types:
// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Structural Root Primitive:
// null : typeof instance === "object"


function addNumbers(a, b) {
    return a + b;
}

console.log("\nOperation: addNumbers(10, 20) \nResult: ", addNumbers(10, 20)); // Adds as numbers

console.log("\naddNumbers(Operation: \"10\", \"20\") \nResult: ", addNumbers("10", "20")); // Concats as Strings

console.log("\nOperation: addNumbers(\"10\", 20) \nResult: ", addNumbers("10", 20)); // Concats as Strings

