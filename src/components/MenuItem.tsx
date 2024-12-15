import React, { useState } from 'react';
import { MenuItem as MenuItemType } from '../types/menu';
import { QuantityButton } from './buttons/QuantityButton';
import { ActionButton } from './buttons/ActionButton';
import { additionalItems } from '../data/menuItems';

interface MenuItemProps {
  item: MenuItemType;
  onAddToOrder: (item: MenuItemType, quantity: number, observations?: string, additionals?: string[]) => void;
}

export default function MenuItem({ item, onAddToOrder }: MenuItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedAdditionals, setSelectedAdditionals] = useState<string[]>([]);

  const handleAdd = () => {
    onAddToOrder(item, quantity, observations, selectedAdditionals);
    setQuantity(1);
    setObservations('');
    setSelectedAdditionals([]);
    setShowOptions(false);
  };

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

  const toggleAdditional = (additionalId: string) => {
    setSelectedAdditionals(prev => 
      prev.includes(additionalId)
        ? prev.filter(id => id !== additionalId)
        : [...prev, additionalId]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-56 object-cover"
        />
        {item.category === 'burgers' && (
          <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 
            rounded-full text-sm font-bold">
            Artesanal
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4 min-h-[48px]">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-yellow-500">
            R$ {item.price.toFixed(2)}
          </span>
          <ActionButton
            text="Pedir"
            onClick={() => setShowOptions(!showOptions)}
            variant="primary"
          />
        </div>

        {showOptions && (
          <div className="mt-6 space-y-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold">Quantidade:</span>
              <QuantityButton
                quantity={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            </div>
            
            {item.category === 'burgers' && (
              <div className="space-y-2">
                <span className="font-bold block">Adicionais:</span>
                {additionalItems.map(additional => (
                  <label key={additional.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedAdditionals.includes(additional.id)}
                      onChange={() => toggleAdditional(additional.id)}
                      className="rounded text-yellow-500 focus:ring-yellow-500"
                    />
                    <span>{additional.name} - R$ {additional.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Observações
              </label>
              <textarea
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={2}
                placeholder="Ex: Sem cebola, bacon extra crocante..."
              />
            </div>

            <ActionButton
              text="Adicionar ao Pedido"
              onClick={handleAdd}
              variant="primary"
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}