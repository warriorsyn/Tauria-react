import React from "react";
import { Route, Redirect, Switch, BrowserRouter, Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import PizzaBuilder from "../pages/pizza-builder";
import history from "./history";
import FinishOrder from "../pages/finish-order";

const Routes: React.FC = () => {
    return (

           <BrowserRouter>
           
            <Switch>
                    <Route path="/" exact render={() => <Redirect to="/home" />} />
                    <Route path="/home" exact component={PizzaBuilder}/>
                    <Route path="/finishorder" exact component={FinishOrder} />
                </Switch>
           </BrowserRouter>

    )   
}

export default Routes;
