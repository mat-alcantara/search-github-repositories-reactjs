import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function IssueList({ issues }) {
  return (
    <Container>
      {issues.map((issue) => (
        <li key={String(issue.id)}>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
          <div>
            <strong>
              <a href={issue.html_url}>{issue.title}</a>
              {issue.labels.map((label) => (
                <span key={String(label.id)}>{label.name}</span>
              ))}
            </strong>
            <p>{issue.user.login}</p>
          </div>
        </li>
      ))}
    </Container>
  );
}

IssueList.propTypes = {
  issues: PropTypes.arrayOf().isRequired,
};
