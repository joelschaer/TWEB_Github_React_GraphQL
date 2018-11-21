import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import IssueList from './routes/IssueList'

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={IssueList} />
            </BrowserRouter>
        );
    }
}

export default AppRouter;