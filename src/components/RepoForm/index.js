import React from 'react';

import PropTypes from 'prop-types';

import { FaGithubAlt } from 'react-icons/fa';

import { Container } from './styles';

export default function RepoForm({ children, handleSubmit }) {
  return (
    <Container onSubmit={handleSubmit}>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <div>{children}</div>
    </Container>
  );
}

RepoForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
