import { getPokemon } from "./generics/";


getPokemon(1)
    .then((number)=> console.log(number))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('Finish call API'))