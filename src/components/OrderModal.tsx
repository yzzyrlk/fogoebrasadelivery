import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { OrderItem } from '../types/menu';
import { formatOrderMessage, generateWhatsAppLink } from '../utils/whatsapp';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { isBusinessOpen } from '../utils/businessHours';
import { DeliveryFeeCalculator } from './delivery/DeliveryFeeCalculator';
import { DeliveryZones } from './delivery/DeliveryZones';
import { QRCodePix } from './payment/QRCodePix';
import { generateOrderId } from '../utils/order';

interface OrderModalProps {
  items: OrderItem[];
  onClose: () => void;
}

export default function OrderModal({ items, onClose }: OrderModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [isDelivery, setIsDelivery] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(RESTAURANT_CONFIG.deliveryInfo.deliveryFee);
  const [showPayment, setShowPayment] = useState(false);
  const [orderId] = useState(generateOrderId());

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (isDelivery ? deliveryFee : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isBusinessOpen()) {
      setValidationError('Desculpe, estamos fechados no momento. Confira nosso horário de funcionamento.');
      return;
    }

    if (subtotal < RESTAURANT_CONFIG.deliveryInfo.minimumOrder) {
      setValidationError(`O pedido mínimo é R$ ${RESTAURANT_CONFIG.deliveryInfo.minimumOrder.toFixed(2)}`);
      return;
    }

    setShowPayment(true);
  };

  const handleSendOrder = () => {
    const message = formatOrderMessage(items, customerName, address, isDelivery, orderId);
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    onClose();
  };

  if (showPayment) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Pagamento</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <QRCodePix value={total} orderId={orderId} />
          
          <button
            onClick={handleSendOrder}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Confirmar e Enviar Pedido
          </button>
        </div>
      </div>
    );
  }

  // Rest of the OrderModal component remains the same...
  // (Previous JSX for the order form)
}