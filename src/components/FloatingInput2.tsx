import React from 'react';

interface FloatingInputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  style?: React.CSSProperties; // stile personalizzato per il contenitore
}

const FloatingInput2: React.FC<FloatingInputProps> = ({
  id = 'customInput',
  placeholder = 'Inserisci testo',
  value,
  onChange,
  type = 'text',
  style = {},
}) => {
  return (
    <div
      className="position-relative"
      style={style}
    >
      <input
        type={type}
        className="form-control floating-input"
        placeholder=" "
        id={id}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: '#ECEEF0',
          border: '1px solid #7f90aa',
          paddingLeft: "10px"
        }}
      />
      <label
        htmlFor={id}
        className="floating-label"
        style={{ paddingLeft: '0px', left: "10px" }}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingInput2;
