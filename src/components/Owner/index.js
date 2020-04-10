import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Owner({ repository }) {
  return (
    <Container>
      <Link to="/">Voltar aos repositórios</Link>
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
    </Container>
  );
}

Owner.propTypes = {
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
