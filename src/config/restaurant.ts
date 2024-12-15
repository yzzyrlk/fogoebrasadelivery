import { RestaurantConfig } from '../types/config';

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: 'Fogo e Brasa',
  whatsapp: '5543984390754',
  phone: '(43) 98439-0754',
  address: 'Arapongas, Casa Grande 1, Rua jaçana preta 206',
  pix: {
    key: 'seu-pix-aqui@email.com', // Substitua pela chave PIX real
    name: 'Fogo e Brasa Hamburgueria',
    city: 'Arapongas'
  },
  businessHours: {
    weekday: {
      open: '19:00',
      close: '01:00'
    },
    weekend: {
      open: '19:00',
      close: '01:00'
    },
    sunday: {
      open: '19:00',
      close: '01:00'
    }
  },
  deliveryInfo: {
    minimumOrder: 25.0,
    deliveryFee: 5.0,
    estimatedTime: '45-60',
    deliveryArea: ['Casa Grande 1', 'Centro', 'Jardim Primavera', 'Vila Nova'],
    baseLocation: {
      address: 'Arapongas, Casa Grande 1, Rua jaçana preta 206',
      lat: -23.4147,
      lng: -51.4252
    },
    feeRules: [
      { distance: 2, fee: 5 },
      { distance: 5, fee: 8 },
      { distance: 8, fee: 12 },
      { distance: 10, fee: 15 }
    ]
  }
};