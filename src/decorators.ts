import { Pokemon } from "./decorators/pokemonClass";

// (Pokemon.prototype as any).newName='Pikachu'

const charmander =new Pokemon('Charmander')

charmander.savePokemonDB(1000)

