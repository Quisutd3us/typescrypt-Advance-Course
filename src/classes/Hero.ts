import powers,{Power}from "../helpers/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get power():string {
    return powers.find((power: Power) => power.id === this.powerId)?.description || 'Power not Found';
  }
}

export class Hero2{}
export class Hero3{}
export class Hero4{}
export class Hero5{}

export const PI = 3.141516;