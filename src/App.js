
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import './components/globalStyle.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import More from './components/more';


import {Container, Row, Col, Card} from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <BrowserRouter>

                {/*<nav className="navbar navbar-expand-lg navbar-light bgDark">*/}
                {/*    /!*<a className="navbar-brand" href="#">Navbar</a>*!/*/}
                {/*    /!*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*!/*/}
                {/*    /!*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*!/*/}
                {/*    /!*    <span className="navbar-toggler-icon"></span>*!/*/}
                {/*    /!*</button>*!/*/}
                {/*    <div className="collapse navbar-collapse " id="navbarNav">*/}
                {/*        <ul className="navbar-nav ">*/}
                {/*            <li className="nav-item active">*/}
                {/*                <a className="nav-link text-light" href="/home">Home <span className="sr-only">(current)</span></a>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}

                {/*                <a className="nav-link text-light" href="/about">About</a>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <a className="nav-link text-light" href="/contact">Contacts</a>*/}
                {/*            </li>*/}
                {/*            <li className="nav-item">*/}
                {/*                <a className="nav-link text-light " href="#">More</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/more' component={More}></Route>

            </BrowserRouter>

        );
    }
}


export default App;