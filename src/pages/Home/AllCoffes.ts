export interface Coffee {
  id: string
  name: string
  tag: string
  description: string
  image: string
  price: number
  quantity: number
}

export const AllCoffes: Coffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    tag: 'tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: '../../../public/Type=Expresso.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    tag: 'TRADICIONAL',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: '../../../public/Image.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    tag: 'TRADICIONAL',
    description: 'Café expresso tradicional com espuma cremosa',
    image: '../../../public/Type=Expresso Cremoso.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    tag: 'TRADICIONAL',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: '../../../public/Type=Café Gelado.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '5',
    name: 'Café com Leite',
    tag: 'TRADICIONAL',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: '../../../public/Type=Café com Leite.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '6',
    name: 'Latte',
    tag: 'TRADICIONAL',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: '../../../public/Type=Latte.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '7',
    name: 'Capuccino',
    tag: 'TRADICIONAL',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: '../../../public/Type=Capuccino.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '8',
    name: 'Macchiato',
    tag: 'TRADICIONAL',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: '../../../public/Type=Macchiato.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '9',
    name: 'Mocaccino',
    tag: 'TRADICIONAL',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: '../../../public/Type=Mochaccino.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    tag: 'TRADICIONAL',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: '../../../public/Type=Chocolate Quente.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '11',
    name: 'Cubano',
    tag: 'TRADICIONAL',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: '../../../public/Type=Cubano.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '12',
    name: 'Havaiano',
    tag: 'TRADICIONAL',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: '../../../public/Type=Havaiano.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '13',
    name: 'Árabe',
    tag: 'TRADICIONAL',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: '../../../public/Type=Árabe.svg',
    price: 9.9,
    quantity: 1,
  },
  {
    id: '14',
    name: 'Irlandês',
    tag: 'TRADICIONAL',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: '../../../public/Type=Irlandês.svg',
    price: 9.9,
    quantity: 1,
  },
]
