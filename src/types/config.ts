export interface BusinessHours {
  open: string;
  close: string;
}

export interface DeliveryInfo {
  minimumOrder: number;
  deliveryFee: number;
  estimatedTime: string;
  deliveryArea: string[];
  baseLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  feeRules: Array<{
    distance: number;
    fee: number;
  }>;
}

export interface PixConfig {
  key: string;
  name: string;
  city: string;
}

export interface RestaurantConfig {
  name: string;
  whatsapp: string;
  phone: string;
  address: string;
  pix: PixConfig;
  businessHours: {
    weekday: BusinessHours;
    weekend: BusinessHours;
    sunday: BusinessHours;
  };
  deliveryInfo: DeliveryInfo;
}