import React from 'react';

type InputLabelProps = {
  name: string,
  value: string,
  label: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

};
function InputLabel({ name, value, label, handleChange }: InputLabelProps) {
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
