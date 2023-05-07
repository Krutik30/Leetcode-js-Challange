/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//     let theFirst = init;
//     return {
//         increment : function (){
//             theFirst++;
//             return theFirst;
//         },
//         decrement : function (){
//             theFirst--;
//             return theFirst;
//         },
//         reset : function() {
//             theFirst = init;
//             return theFirst;
//         }
//     }
// };

// we have to call function with it's name therefore we return object with the key name 
// we can make with class methode approch

class Counter {
    constructor(init) {
        this.init = init;
        this.current = init;
    }

    increment() {
        return ++(this.current);
    }
    decrement() {
        return --(this.current);
    }
    reset() {
        this.current = this.init
        return this.current;
    }
} 

var createCounter = function(init){
    return new Counter(init);
}
// --> in this we have encapsulation : privacy;

// --> in this we can do this with get proxy methode;
// var createCounter = function(init) {
//   let currentCount = init;
//   return new Proxy({}, {
//     get: (target, key) => {
//       switch(key) {
//         case "increment":
//           return () => ++currentCount;
//         case "decrement":
//           return () => --currentCount;
//         case "reset":
//           return () => (currentCount = init);
//         default:
//           throw Error("Unexpected Method")
//       }
//     },
//   });
// };


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */