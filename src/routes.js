import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Integrantes from './pages/Integrantes'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/integrantes" exact component={Integrantes} />
        </Switch>
    )
}