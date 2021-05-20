
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import './components/globalStyle.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import More from './components/more';
import NavbarTop from "./components/NavbarTop";

import { createBrowserHistory } from "history";


const App = () => {

        const history = createBrowserHistory()

        return (
            <BrowserRouter>
                    {(history.location.pathname!=="/home" && <NavbarTop/>)}

                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/more' component={More}/>

            </BrowserRouter>

        );

}


export default App;