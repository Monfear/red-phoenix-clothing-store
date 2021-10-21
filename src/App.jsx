import "./App.css";

import { Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { Header } from "./Components/Pages/Header/Header";
import { Error } from "./Components/Pages/Error/Error";
import { RegisterForm } from "./Components/Pages/RegisterForm/RegisterForm";
import { LoginForm } from "./Components/Pages/LoginForm/LoginForm";
import { Account } from "./Components/Pages/Account/Account";

function App() {
    const authSelector = useSelector((store) => store.auth);

    return (
        <div className="App">
            <Navbar></Navbar>

            <Switch>
                <Route path="/" exact>
                    <Header></Header>
                </Route>

                <Route path="/register">
                    <RegisterForm></RegisterForm>
                </Route>

                <Route path="/login">
                    <LoginForm></LoginForm>
                </Route>

                {authSelector.isLoggedIn && (
                    <Route path="/account">
                        <Account></Account>
                    </Route>
                )}

                <Route path="*">
                    <Error></Error>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
