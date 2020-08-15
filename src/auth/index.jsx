import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function Auth() {

    const match = useRouteMatch()

    return <div className="Auth">
        <Switch>
            <Route path={`${match.url}/login`}>
                <Login />
            </Route>
            <Route path={`${match.url}/register`}>
                <Register />
            </Route>
        </Switch>
    </div>
}