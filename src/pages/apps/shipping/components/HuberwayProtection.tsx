import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HuberwayProtection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-3 mt-3">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
        style={{ cursor: 'pointer' }}
      >
        <h4 className="m-0 fw-bold text-black" style={{ fontSize: '18px', userSelect: 'none' }}>
          Huberway protezione della spedizione
        </h4>
        {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
      </div>

      {isOpen && (
        <div className="mt-3">
          {/* Inserisci qui il contenuto in futuro */}
        </div>
      )}
    </Card>
  );
};

export default HuberwayProtection;
