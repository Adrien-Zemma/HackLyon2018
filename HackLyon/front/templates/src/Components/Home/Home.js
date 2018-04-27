import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <h1 className="w3-center title-color bold">City-OS</h1>
                <div className="w3-row w3-padding">
                    <div className="w3-quarter w3-padding">
                        <div class="card img-width height-card">
                            <Link to={{ pathname: '/qcm', state: { choose : "school" }}}>
                                <div class="card-image">
                                    <img className="w3-img" src="https://image.freepik.com/free-vector/school-building-with-flat-design_23-2147653591.jpg" />
                                    <span class="card-title title-color">Ecole</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w3-quarter w3-padding height-card">
                    <div class="card">
                            <Link to={{ pathname: '/qcm', state: { choose : "footing" }}}>
                                    <div class="card-image">
                                        <img className="w3-img img-width" src="https://i.pinimg.com/736x/96/1e/2e/961e2e942768f4aa8afe9aa1faafb71f--shoes-sneakers-flat-design.jpg" />
                                        <span class="card-title title-color">Sportif</span>
                                    </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w3-quarter w3-padding">
                    <div class="card">
                    <Link to={{ pathname: '/qcm', state: { choose : "flemmard" }}}>
                            <div class="card-image">
                                <img className="w3-img img-width" src="http://kit8.net/images/detailed/1/Sleepa_1.png" />
                                <span class="card-title title-color">Flemmard</span>
                            </div>
                    </Link>
                        </div>
                    </div>
                    <div className="w3-quarter w3-padding">
                    <div class="card">
                    <Link to={{ pathname: '/qcm', state: { choose : "custom" }}}>
                            <div class="card-image">
                                <img className="w3-img img-width" src="https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/14/143/143523/creativboard-converted-01-o.jpg?1405433633" />
                                <span class="card-title title-color">Personalisé</span>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;