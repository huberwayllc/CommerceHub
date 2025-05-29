import React from 'react';

interface FloatingInputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  type?: string;
  style?: React.CSSProperties; // <- aggiunto per stile personalizzato
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  id = 'customInput',
  placeholder = 'Inserisci testo',
  value,
  onChange,
  icon,
  type = 'text',
  style = {}, // <- default vuoto
}) => {
  return (
    <div
      className="position-relative flex-grow-1 bg-white border-0"
      style={style} 
    >
      {icon && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: '#6c757d',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          {icon}
        </div>
      )}
      <input
        type={type}
        className="form-control floating-input bg-white border-0 boxShadow"
        placeholder=" "
        id={id}
        value={value}
        onChange={onChange}
        style={{
          paddingLeft: icon ? '35px' : undefined,
        }}
      />
      <label htmlFor={id} className="floating-label">
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingInput;
