import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Smash',
    description: 'Blend especial 180g, queijo cheddar derretido, alface crocante, tomate, cebola roxa e nosso molho especial',
    price: 32.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  },
  {
    id: 2,
    name: 'Bacon Lover',
    description: 'Blend 180g, muito bacon crocante, queijo monterey jack, cebola caramelizada e maionese defumada',
    price: 38.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5'
  },
  {
    id: 3,
    name: 'Monster Cheese',
    description: 'Duplo blend 180g, triplo queijo (cheddar, monterey jack e gorgonzola), cebola crispy e molho especial',
    price: 45.90,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90'
  },
  // Acompanhamentos
  {
    id: 4,
    name: 'Batata Frita',
    description: 'Porção de batatas fritas crocantes',
    price: 15.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877'
  },
  {
    id: 5,
    name: 'Batata Frita com Cheddar',
    description: 'Porção de batatas fritas cobertas com cheddar cremoso',
    price: 19.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877'
  },
  {
    id: 6,
    name: 'Batata Frita Suprema',
    description: 'Porção de batatas fritas com cheddar e bacon crocante',
    price: 24.90,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877'
  },
  // Bebidas
  {
    id: 7,
    name: 'Coca-Cola Lata',
    description: '200ml',
    price: 5.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97'
  },
  {
    id: 8,
    name: 'Guaraná Lata',
    description: '200ml',
    price: 5.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97'
  },
  {
    id: 9,
    name: 'Suco Natural de Laranja 1L',
    description: 'Suco natural de laranja',
    price: 15.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423'
  },
  {
    id: 10,
    name: 'Suco Natural de Laranja 2L',
    description: 'Suco natural de laranja',
    price: 25.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423'
  },
  {
    id: 11,
    name: 'Água sem Gás',
    description: '500ml',
    price: 3.90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4'
  }
];

export const additionalItems = [
  {
    id: 'add-1',
    name: 'Hambúrguer Adicional',
    price: 12.90,
    description: 'Blend adicional de 180g'
  },
  {
    id: 'add-2',
    name: 'Maionese Artesanal',
    price: 3.90,
    description: 'Sachê 50ml'
  },
  {
    id: 'add-3',
    name: 'Molho Chutney de Abacaxi',
    price: 4.90,
    description: 'Sachê 50ml'
  }
];