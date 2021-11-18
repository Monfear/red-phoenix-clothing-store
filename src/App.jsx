import "./App.css";

import { Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

import { Navbar } from "./Components/Layout/Navbar/Navbar";
import { Header } from "./Components/Pages/Header/Header";
import { Error } from "./Components/Pages/Error/Error";
import { RegisterForm } from "./Components/Pages/RegisterForm/RegisterForm";
import { LoginForm } from "./Components/Pages/LoginForm/LoginForm";
import { Account } from "./Components/Pages/Account/Account";

import { ProductDetails } from "./Components/Content/ProductDetails/ProductDetails";
import { Cart } from "./Components/Pages/Cart/Cart";

import { Category } from "./Components/Pages/Category/Category";
import { Categories } from "./Components/Pages/Categories/Categories";

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
                    <Categories gender={"men"}></Categories>
                </Route>

                <Route path="/men/shoes" exact>
                    <Category gender={"men"} category={"shoes"}></Category>
                </Route>

                <Route path="/men/shoes/:id">
                    <ProductDetails></ProductDetails>
                </Route>

                <Route path="/men/jackets" exact>
                    <Category gender={"men"} category={"jackets"}></Category>
                </Route>

                <Route path="/men/jackets/:id">
                    <ProductDetails></ProductDetails>
                </Route>

                <Route path="/women" exact>
                    <Categories gender={"women"}></Categories>
                </Route>

                <Route path="/women/shoes" exact>
                    <Category gender={"women"} category={"shoes"}></Category>
                </Route>

                <Route path="/women/shoes/:id">
                    <ProductDetails></ProductDetails>
                </Route>

                <Route path="/women/jackets" exact>
                    <Category gender={"women"} category={"jackets"}></Category>
                </Route>

                <Route path="/women/jackets/:id">
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
