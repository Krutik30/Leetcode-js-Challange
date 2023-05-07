// if we have to make similar type of fun with diff methode 
// we just return fun in fun so we can call main methode and give returned fun


// function createAdder(a) {
//   return function add(b) {
//     const sum = a + b;
//     return sum;
//   }
// }
// const addTo2 = createAdder(2);
// addTo2(5); // 7

// like this like we can do this with classes
// we can give variable and method to the class and make function generator
// this trick has one benifit as we can give privatation that not any one can change the function's inner var

// class Adder {
//   constructor(a) {
//      this.a = a;
//   }

//   add(b) {
//     const sum = this.a + b;
//     return sum;
//   }
// }
// const addTo2 = new Adder(2);
// addTo2.add(5); // 7

// while in function methode that can be changed
// addTo2.a = 3;


/**
 * @param {number} n
 * @return {Function} counter
 */

// app - 1 :: increament store and then return
// var createCounter = function(n) {
//     let currentCount = n - 1;
//     return function count(n) {
//         currentCount += 1;
//         return currentCount;
//     };
// };

// app - 2 :: postfix Increment Syntax
var createCounter = function(n) {
    return function() {
        return n++;
    };

    // in this we don't have to give name to function 
    // why? because it has to be return and given name with allocation while main function will call

    // return () => n++;
};



/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */