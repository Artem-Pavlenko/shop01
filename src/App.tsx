import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header"
import {Main} from "./components/Main/Main"
import {Route, Switch} from 'react-router-dom'
import {Cart} from "./components/Cart/Cart"
import {About} from "./components/About/About"

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/'} exact render={() => <Main/>}/>
                <Route path={'/cart'} render={() => <Cart/>}/>
                <Route path={'/about'} render={() => <About/>}/>
            </Switch>
        </div>
    )
}

export default App
