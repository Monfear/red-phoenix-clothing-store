import "./App.css";

import { Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { Header } from "./Components/Pages/Header/Header";
import { Error } from "./Components/Pages/Error/Error";
import { RegisterForm } from "./Components/Pages/RegisterForm/RegisterForm";
import { LoginForm } from "./Components/Pages/LoginForm/LoginForm";
import { Account } from "./Components/Pages/Account/Account";
import { Men } from "./Components/Pages/Men/Men";
import { Women } from "./Components/Pages/Women/Women";

import { Shoes } from "./Components/Pages/Products/Shoes/Shoes";
import { ProductDetails } from "./Components/Content/ProductDetails/ProductDetails";
import { Cart } from "./Components/Pages/Cart/Cart";

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

                <Route path="/cart">
                    <Cart></Cart>
                </Route>

                <Route path="/men" exact>
                    <Men></Men>
                </Route>

                <Route path="/men/shoes" exact>
                    <Shoes gender={"men"}></Shoes>
                </Route>

                <Route path="/men/shoes/:id">
                    <ProductDetails></ProductDetails>
                </Route>

                <Route path="/women" exact>
                    <Women></Women>
                </Route>

                <Route path="/women/shoes" exact>
                    <Shoes gender={"women"}></Shoes>
                </Route>

                <Route path="/women/shoes/:id">
                    <ProductDetails></ProductDetails>
                </Route>

                <Route path="*">
                    <Error></Error>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
