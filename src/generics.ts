
import { printObject,genericFunction } from "./generics/generics";
import { Villain,Hero } from "./interfaces";

printObject(123);
printObject(new Date().getUTCMilliseconds());
printObject({a:1,b:2, c:'4'});
printObject([1,2,3,5,6]);
printObject(true);
printObject('Mi name');


console.log(genericFunction(3.141610).toFixed(2))
console.log(genericFunction('3.141610').length)
console.log(genericFunction(new Date()).getFullYear())

console.log('------------------------')

const deadPool ={
    name:'DeadPool',
    realName:'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Villain>(deadPool).dangerLevel)
console.log(genericFunction<Hero>(deadPool).realName)