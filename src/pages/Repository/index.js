// A page who contains the infos about a repository and its opened issues

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import Owner from '../../components/Owner';
import IssueList from '../../components/IssueList';
import Loading from '../../components/Loading';

export default class Repository extends Component {
  state = {
    // Repository data
    repository: {},
    // Array with the issues
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    // Property received in url params
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    // Execute the two promises at the same time
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { issues, repository, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Container>
        <Owner repository={repository} />
        <IssueList issues={issues} />
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
