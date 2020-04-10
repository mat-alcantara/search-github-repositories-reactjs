// Create a list of all the repositorys that a user stored

import React, { Component } from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import RepoForm from '../../components/RepoForm';
import RepoList from '../../components/RepoList';
import FormInput from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  // Update newRepo state to the value in the input field after every change
  handleInputChange = (e) => {
    this.setState({
      newRepo: e.target.value,
    });
  };

  // Use the api to return a repository in value field
  handleSubmit = async (e) => {
    e.preventDefault();

    // Set a loading property true while making the new request
    this.setState({
      loading: true,
    });

    const { newRepo, repositories } = this.state;

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      // Store the new data to render
      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      <Container>
        <RepoForm handleSubmit={this.handleSubmit}>
          <FormInput handleInput={this.handleInputChange} repoValue={newRepo} />
          <SubmitButton loading={loading} />
        </RepoForm>
        <RepoList repositories={repositories} />
      </Container>
    );
  }
}
