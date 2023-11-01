export interface Power {
  id: number;
  name: string;
  description?: string;
}


 const powers:Power[]=[
    {
        id:1,
        name:'Speed',
        description:'Light speed',
    },
    {
        id:2,
        name:'Time Travel',
        description:'Past time travel Power',
    },
    {
        id:3,
        name:'Money',
        description:'For inheritance Tom Bruce have a lot of Money',
    }
]

export default powers;