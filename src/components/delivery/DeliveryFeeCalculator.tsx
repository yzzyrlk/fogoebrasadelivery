import React, { useState } from 'react';
import { getCoordinatesFromAddress } from '../../services/maps';
import { calculateDeliveryFee, calculateDistance } from '../../utils/delivery';
import { RESTAURANT_CONFIG } from '../../config/restaurant';
import { ActionButton } from '../buttons/ActionButton';

interface DeliveryFeeCalculatorProps {
  onFeeCalculated: (fee: number) => void;
}

export function DeliveryFeeCalculator({ onFeeCalculated }: DeliveryFeeCalculatorProps) {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateFee = async () => {
    setLoading(true);
    setError('');

    try {
      const coordinates = await getCoordinatesFromAddress(address);
      
      if (!coordinates) {
        setError('Endereço não encontrado. Por favor, verifique e tente novamente.');
        return;
      }

      const distance = calculateDistance(RESTAURANT_CONFIG.deliveryInfo.baseLocation, coordinates);
      const fee = calculateDeliveryFee(distance);
      
      onFeeCalculated(fee);
    } catch (err) {
      setError('Erro ao calcular taxa de entrega. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Endereço de Entrega
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Digite seu endereço completo"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <ActionButton
        text={loading ? 'Calculando...' : 'Calcular Taxa de Entrega'}
        onClick={calculateFee}
        disabled={loading || !address}
        variant="primary"
        className="w-full"
      />
    </div>
  );
}