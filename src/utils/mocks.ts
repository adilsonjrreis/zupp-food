import { Product, Restaurant } from '../types';

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Burger King',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: 5.99,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80',
    tags: ['Hambúrguer', 'Fast Food', 'American'],
  },
  {
    id: '2',
    name: 'Sushi Zen',
    rating: 4.8,
    deliveryTime: '40-50 min',
    deliveryFee: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80',
    tags: ['Sushi', 'Japanes', 'Asian'],
  },
  {
    id: '3',
    name: 'Pizza Express',
    rating: 4.3,
    deliveryTime: '30-45 min',
    deliveryFee: 4.00,
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
    tags: ['Pizza', 'Italiano', 'Comfort Food'],
  },
];

export const MOCK_PRODUCTS: Record<string, Product[]> = {
  '1': [
    {
      id: 'p1',
      restaurantId: '1',
      name: 'Whopper',
      description: 'Um hambúrguer clássico de carne grelhada na chama com ingredientes frescos.',
      price: 12.99,
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    },
    {
      id: 'p2',
      restaurantId: '1',
      name: 'Batatas fritas',
      description: 'Batatas fritas douradas e crocantes, preparadas no ponto perfeito.',
      price: 4.99,
      imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&q=80',
    }
  ],
  '2': [
    {
      id: 'p3',
      restaurantId: '2',
      name: 'Salmão fresco',
      description: 'Salmão fresco envolto em arroz temperado e alga marinha.',
      price: 14.50,
      imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80',
    }
  ],
  '3': [
    {
      id: 'p4',
      restaurantId: '3',
      name: 'Pizza Margherita',
      description: 'Pizza clássica de queijo e tomate.',
      price: 16.00,
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
    }
  ]
};
