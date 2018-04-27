import React from 'react';
import {Link, HashRouter as Router} from 'react-router-dom';
import Lang from './NavBar.json';
import './NavBar.css';

class NavBar extends React.Component
{
    render()
    {
        return (
            <div>
                <Router>
                    <nav>
                        <div className="nav-wrapper">
                            <a className="burger" href="#" data-activates="mobile-demo" id="button-collapse"><i className="fa fa-bars" aria-hidden="true"></i></a>
                            
                            <div className="side-nav container" id="mobile-demo">

                                <div className="row marginTop">
                                    <div className="center col s6 m6 l6">
                                        <h4 className="black-text">Logo</h4>
                                    </div>
                                    <div className="center col s6 m6 l6">
                                        <img className="circle" width="96" src="https://cdn.discordapp.com/attachments/266953688801738752/314875130910212096/ilya-kuvshinov-scissors.jpg"/>
                                    </div>
                                </div>

                                <ul>
                                    <li><Link to="/">{Lang[navigator.language].home}</Link></li>
                                    <li><Link to="/about">{Lang[navigator.language].about}</Link></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </Router>
            </div>
        );
    };
};

export default NavBar;