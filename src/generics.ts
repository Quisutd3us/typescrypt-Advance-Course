import { printObject,genericFunction } from "./generics/generics";

printObject(123);
printObject(new Date().getUTCMilliseconds());
printObject({a:1,b:2, c:'4'});
printObject([1,2,3,5,6]);
printObject(true);
printObject('Mi name');

console.log('------------------------')

console.log(genericFunction(3.141610).toFixed(2))
console.log(genericFunction('3.141610').length)
console.log(genericFunction(new Date()).getFullYear())