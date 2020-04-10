import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormInput({ handleInput, repoValue }) {
  return (
    <Container
      type="text"
      placeholder="Adicionar repositório"
      onChange={handleInput}
      value={repoValue}
    />
  );
}

FormInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  repoValue: PropTypes.string.isRequired,
};
