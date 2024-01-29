import React from 'react';

type InputLabelProps = {
  name: string,
  value: string,
  label: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;

};

function InputLabel({ name, value, label, onChange }: InputLabelProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <div className="form_group">
      <label htmlFor={ name }>{label}</label>
      <input
        type="text"
        name={ name }
        id={ name }
        value={ value }
        onChange={ handleChange }
      />
    </div>
  );
}

export default InputLabel;
