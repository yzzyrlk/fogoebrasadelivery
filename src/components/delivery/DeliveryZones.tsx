import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurant';

export function DeliveryZones() {
  const { deliveryArea, feeRules } = RESTAURANT_CONFIG.deliveryInfo;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Áreas de Entrega</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Bairros Atendidos:</h4>
          <ul className="list-disc list-inside space-y-1">
            {deliveryArea.map((area) => (
              <li key={area} className="text-gray-600">{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Taxa de Entrega por Distância:</h4>
          <ul className="space-y-2">
            {feeRules.map((rule, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>Até {rule.distance}km</span>
                <span className="font-medium">R$ {rule.fee.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}