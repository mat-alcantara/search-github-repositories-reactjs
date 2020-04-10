import React from 'react';

import PropTypes from 'prop-types';

import { FaSpinner, FaPlus } from 'react-icons/fa';

import { Container } from './styles';

export default function SubmitButton({ loading }) {
  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <FaSpinner color="#FFF" size={14} />
      ) : (
        <FaPlus color="#FFF" size={14} />
      )}
    </Container>
  );
}

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};
