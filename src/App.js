
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import './components/globalStyle.css';
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import More from './components/More';
import NavbarTop from "./components/NavbarTop";
import EvaStudy from "./components/MoreProj/EvaStudy";

import { createBrowserHistory } from "history";


const App = () => {

        const history = createBrowserHistory()

        return (
            <BrowserRouter>
                    {(history.location.pathname!=="/" && <NavbarTop/>)}

                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/more' component={More}/>

                <Route exact path='/extra' component={EvaStudy}/>


            </BrowserRouter>

        );

}


export default App;