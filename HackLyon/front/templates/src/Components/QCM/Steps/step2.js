import React from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators, compose }      from 'redux';
import Input, { InputLabel } from 'material-ui/Input';

import { addArray } from './actions';

class step2 extends React.Component
{
    render()
    {
        return(
        <div>
            <h1 className="w3-center title-color bold white">Transports favoris</h1>
            <div className="w3-row w3-padding">
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Velo")}}>
                            <img className="w3-img" src="http://www.bluthemes.com/assets/img/blog/12/bicycle.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Velo</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Voiture")}}>
                            <img className="w3-img" src="http://thumb9.shutterstock.com/display_pic_with_logo/2381402/365262632/stock-vector-cool-flat-design-modern-crossover-vehicle-with-ski-rack-on-top-winter-sports-design-element-on-365262632.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Voiture</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Tramway")}}>
                            <img className="w3-img" src="https://t3.ftcdn.net/jpg/01/22/09/02/500_F_122090224_AYHpBOqihaBPDghKkGBBLPVyuCZHEItE.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Tramway</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Metro")}}>
                            <img className="w3-img" src="https://imageog.flaticon.com/icons/png/512/450/450893.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                        </div>
                        <div>
                            <span class="card-title title-color">Metro</span>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="w3-display-bottommiddle white-text">{this.props.data.vehiculeFavoris.map((e) => {return (e + " ")})}</h2>
        </div>
        )
    }
};

function stateToProps(state)
{
    return {
        data : state.Form
    }
}

function matchDispatchToProps(dispatch)
{
    return bindActionCreators({
        modif : addArray
    }, dispatch);
}

export default connect(stateToProps, matchDispatchToProps)(step2);