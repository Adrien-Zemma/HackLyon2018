import React from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators, compose }      from 'redux';
import Input, { InputLabel } from 'material-ui/Input';

import { addLocation } from './actions';

class step2 extends React.Component
{
    render()
    {
        return(
        <div>
            <h1 className="white w3-center title-color bold">Lieux favoris</h1>
            <div className="w3-row w3-padding">
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Site et Monument")}}>
                            <img className="w3-img" src="http://www.bluthemes.com/assets/img/blog/12/bicycle.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Site et Monument</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Musee")}}>
                            <img className="w3-img" src="http://thumb9.shutterstock.com/display_pic_with_logo/2381402/365262632/stock-vector-cool-flat-design-modern-crossover-vehicle-with-ski-rack-on-top-winter-sports-design-element-on-365262632.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Musée</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Plein air")}}>
                            <img className="w3-img" src="https://t3.ftcdn.net/jpg/01/22/09/02/500_F_122090224_AYHpBOqihaBPDghKkGBBLPVyuCZHEItE.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Plein air</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Nature et parc")}}>
                            <img className="w3-img" src="https://imageog.flaticon.com/icons/png/512/450/450893.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                        </div>
                        <div>
                            <span class="card-title title-color">Nature et parc</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="w3-row w3-padding">
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Zoo et aquarium")}}>
                            <img className="w3-img" src="http://www.bluthemes.com/assets/img/blog/12/bicycle.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Zoo et aquarium</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Jeux et divertissements")}}>
                            <img className="w3-img" src="http://thumb9.shutterstock.com/display_pic_with_logo/2381402/365262632/stock-vector-cool-flat-design-modern-crossover-vehicle-with-ski-rack-on-top-winter-sports-design-element-on-365262632.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Jeux et divertissements</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Shopping")}}>
                            <img className="w3-img" src="https://t3.ftcdn.net/jpg/01/22/09/02/500_F_122090224_AYHpBOqihaBPDghKkGBBLPVyuCZHEItE.jpg" />
                        </div>
                        <div>
                            <span class="card-title title-color">Shopping</span>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter w3-padding">
                    <div class="card img-width height-card">
                        <div class="card-image" onClick={()=>{this.props.modif("Circuits")}}>
                            <img className="w3-img" src="https://imageog.flaticon.com/icons/png/512/450/450893.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
                        </div>
                        <div>
                            <span class="card-title title-color">Circuits</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="white-text">{this.props.data.endroitsFavoris.map((e) => {return (e + " ")})}</h2>
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
        modif : addLocation
    }, dispatch);
}

export default connect(stateToProps, matchDispatchToProps)(step2);