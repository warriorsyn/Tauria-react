import React from "react";
import { Route, Redirect, Switch, BrowserRouter, Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import PizzaBuilder from "../pages/pizza-builder";
import history from "./history";

const Routes: React.FC = () => {
    return (

           <BrowserRouter>
           
            <Switch>
                    <Route path="/" exact render={() => <Redirect to="/home" />} />
                    <Route path="/home" exact component={PizzaBuilder}/>
                </Switch>
           </BrowserRouter>

    )   
}

export default Routes;
