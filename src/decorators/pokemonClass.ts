import { isDecorator } from "typescript";

function printToConsole(constructor:Function ){
    console.log(constructor)
}

const printToConsoleConditional = (doPrint:boolean =false): Function => {
  if(doPrint){
    return printToConsole;
  }else{
    return () => {};
  }
};

// This decorator restricts add new properties to the class
const blockPrototype = function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// This is a isDecorator for a function
function CheckValidPokemonId(){
    return function(target:any, propertyKey:string , descriptor:PropertyDescriptor){
      const originalMethod = descriptor.value;

      descriptor.value = (id: number) => {
        if (id < 1 || id > 800) {
          return console.error("The Id of pokemon mut be between 1 to 8000");
        } else {
          return originalMethod(id);
        }
      };
    }
}

@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  public publicAPI = "https://pokeapi.co";
  constructor(public name: string) {}
  //   methods
  @CheckValidPokemonId()
  savePokemonDB(id: number) {
    console.log(`Save pokemon id: ${id} on Db : success `);
  }
}