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

@printToConsoleConditional(true)
export class Pokemon {
  public publicAPI = "https://pokeapi.co";
  constructor(public name: string) {}
}