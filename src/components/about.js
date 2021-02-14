import React, {Component} from 'react';

import {Link} from "react-router-dom";


class about extends Component{
    render(){
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bgDark">
                        {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                        {/*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                        {/*    <span className="navbar-toggler-icon"></span>*/}
                        {/*</button>*/}
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link text-light" href="/home">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link text-light" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/contact">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light " href="#">More</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>
        )


    }

}
export default about;