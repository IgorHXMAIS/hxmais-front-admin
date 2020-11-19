import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { StyledInput } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledInput>
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        <p>{error}</p>
      </StyledInput>
    </>
  );
}

export default Input;
