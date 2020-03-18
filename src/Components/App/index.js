import React from "react";
import LoginPage from "../../Pages/LoginPage";
import RoutingList from "../RoutingList";
import { useUserState } from "../../Context/UserContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app" />} />
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/app">
                    <RoutingList />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

function PrivateRoute({ children, ...props }) {
    let { isAuntheticated } = useUserState();
    return <Route {...props}>{isAuntheticated ? children : <Redirect to="/login" />}</Route>;
}

export default App;
