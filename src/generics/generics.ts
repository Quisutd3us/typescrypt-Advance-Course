
export const printObject = <T>(args: T) => console.log(args);


// type T is default for generics in Typescript
export function genericFunction<T>(args:T){
  return args;
}