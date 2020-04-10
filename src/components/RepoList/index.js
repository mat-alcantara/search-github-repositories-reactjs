import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function RepoList({ repositories }) {
  return (
    <Container>
      {repositories.map((repository) => (
        <li key={repository.name}>
          <span>{repository.name}</span>
          <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
            Detalhes
          </Link>
        </li>
      ))}
    </Container>
  );
}

RepoList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
