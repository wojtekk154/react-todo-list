import React from 'react';
import './App.css';
import { store } from "./store";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainTemplate } from "./components/molecules/Template";
import { NotFoundPage } from "./components/pages/NotFound";
import { ROUTES } from "./constants/routes";
import { TodoListPage } from "./components/pages/List";
import { LandingPage } from "./components/pages/LandingPage";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path={ROUTES.main} component={LandingPage}/>
                        <Route exact path={ROUTES.todo.path} component={TodoListPage}/>
                        <Route exact path={ROUTES.notFound} component={NotFoundPage}/>
                        <Redirect to={ROUTES.notFound}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
