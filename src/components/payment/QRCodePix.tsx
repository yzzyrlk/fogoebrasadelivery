import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurant';

interface QRCodePixProps {
  value: number;
  orderId: string;
}

export function QRCodePix({ value, orderId }: QRCodePixProps) {
  // Função para gerar o payload do PIX
  const generatePixPayload = () => {
    const { pix } = RESTAURANT_CONFIG;
    const payload = {
      keyType: '01', // Tipo de chave (CPF, email, telefone, etc)
      key: pix.key,
      name: pix.name,
      city: pix.city,
      amount: value.toFixed(2),
      reference: orderId,
    };
    
    // Aqui você implementaria a lógica real de geração do payload PIX
    // Por enquanto, retornamos uma URL de exemplo
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      JSON.stringify(payload)
    )}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold">Pagamento via PIX</h3>
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <img
          src={generatePixPayload()}
          alt="QR Code PIX"
          className="w-48 h-48"
        />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600">Valor: R$ {value.toFixed(2)}</p>
        <p className="text-sm text-gray-600">Pedido: #{orderId}</p>
      </div>
      <button
        onClick={() => {/* Implementar cópia da chave PIX */}}
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
      >
        Copiar Chave PIX
      </button>
    </div>
  );
}