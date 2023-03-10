import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return ( 
    <Provider store={store}>
      {isLoggIn && (
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' component={Home} />
            <Route exact path='/regsiter' component={Regsiter} />
            <Route exact path='/account' component={Account} />
          </Routes>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
      </Provider>
  )
}
export default App


