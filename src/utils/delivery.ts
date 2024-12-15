interface Coordinates {
  lat: number;
  lng: number;
}

export function calculateDistance(origin: Coordinates, destination: Coordinates): number {
  const R = 6371; // Raio da Terra em km
  const dLat = toRad(destination.lat - origin.lat);
  const dLon = toRad(destination.lng - origin.lng);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(origin.lat)) * Math.cos(toRad(destination.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return distance;
}

function toRad(value: number): number {
  return value * Math.PI / 180;
}

export function calculateDeliveryFee(distance: number): number {
  const { feeRules } = RESTAURANT_CONFIG.deliveryInfo;
  
  for (const rule of feeRules) {
    if (distance <= rule.distance) {
      return rule.fee;
    }
  }
  
  return feeRules[feeRules.length - 1].fee;
}