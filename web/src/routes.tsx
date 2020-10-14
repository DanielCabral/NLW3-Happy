import React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/> 
            <Route path="/app" component={OrphanagesMap}/> 
            <Switch></Switch>
        </BrowserRouter>
            
        
    )
}
