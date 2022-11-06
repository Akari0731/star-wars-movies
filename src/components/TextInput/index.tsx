import React from 'react';
import classes from './index.module.scss';

interface TextInputProps {
  name: string;
  placeholderText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}

export const TextInput: React.FC<TextInputProps> = ({ name, placeholderText, onChange, value }) => {
  return (
    <input
      type="text"
      className={classes.input}
      name={name}
      aria-label={name}
      onChange={onChange}
      value={value ?? ''}
      placeholder={placeholderText}
    />
  );
};
