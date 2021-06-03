import React, {Component} from 'react';

import './globalStyle.css';
import Ripples from 'react-ripples'



const Home = (props) => {


        return(
            <div>
                <main className="menu">
                    <div className="list-group">
                        <a href="/about" className="list-group-item list-group-item-action bg-dark text-light">About</a>
                        <a href="/contact" className="list-group-item list-group-item-action bg-dark text-light">Contact</a>
                        <a href="/more" className="list-group-item list-group-item-action bg-dark text-light">More</a>
                    </div>
                </main>
                <a href="/more" className="list-group-item list-group-item-action bg-dark text-light disabled"> Wesbite made by Daoqin.</a>

            </div>
        )


}
export default Home;