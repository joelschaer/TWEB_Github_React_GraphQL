import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const query = gql`
{
  user(login: "paulnta") {
    login
    avatarUrl
  }
}
`

class IssueList extends Component {
    render() {
        return (
            <div ClassName='App-IssueList'>
                <h1>hello</h1>
                <Query query={query}>
                    {({ data, loading }) => (
                        loading
                            ? <div>Loading...</div>
                            : <pre>{JSON.stringify(data, null, 2)}</pre>
                    )}
                </Query>
            </div>
        );
    }
}

export default IssueList;