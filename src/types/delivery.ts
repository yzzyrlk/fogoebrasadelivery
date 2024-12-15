export interface Coordinates {
  lat: number;
  lng: number;
}

export interface DeliveryFeeRule {
  distance: number;
  fee: number;
}

export interface DeliveryZone {
  name: string;
  coordinates: Coordinates[];
}