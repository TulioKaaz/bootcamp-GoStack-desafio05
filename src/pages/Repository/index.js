import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, FilterContainer, Button } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    issueState: 'open',
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const { issueState } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
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

  async componentDidUpdate(_, prevState) {
    const { match } = this.props;
    const { issueState } = this.state;

    if (prevState.issueState !== issueState) {
      const repoName = decodeURIComponent(match.params.repository);

      const issues = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 5,
        },
      });

      this.updateIssues(issues);
    }
  }

  updateIssues = issues => {
    this.setState({
      issues: issues.data,
    });
  };

  render() {
    const { repository, issues, loading, issueState } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos Repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <FilterContainer>
          <Button
            type="button"
            style={{ opacity: issueState === 'all' ? 1.0 : 0.5 }}
            color="#7159c1"
            onClick={() => this.setState({ issueState: 'all' })}
          >
            All
          </Button>
          <Button
            type="button"
            style={{ opacity: issueState === 'open' ? 1.0 : 0.5 }}
            color="#27cf00"
            onClick={() => this.setState({ issueState: 'open' })}
          >
            Open
          </Button>
          <Button
            type="button"
            style={{ opacity: issueState === 'closed' ? 1.0 : 0.5 }}
            color="#ff2e16"
            onClick={() => this.setState({ issueState: 'closed' })}
          >
            Closed
          </Button>
        </FilterContainer>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
