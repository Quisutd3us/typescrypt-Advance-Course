function printToConsole(constructor:Function ){
    console.log(constructor)
}

@printToConsole
export class Pokemon {
  public publicAPI = "https://pokeapi.co";
  constructor(public name: string) {}
}