import "./App.css";

import { Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { Header } from "./Components/Pages/Header/Header";
import { Error } from "./Components/Pages/Error/Error";
import { Register } from "./Components/Pages/Register/Register";

function App() {
    // console.log(process.env);
    return (
        <div className="App">
            <Navbar></Navbar>

            <Switch>
                <Route path="/" exact>
                    <Header></Header>
                </Route>

                <Route path="/register">
                    <Register></Register>
                </Route>

                <Route path="*">
                    <Error></Error>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
