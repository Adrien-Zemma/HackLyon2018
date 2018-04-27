import React from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators, compose }      from 'redux';
import Input, { InputLabel } from 'material-ui/Input';

import { getInputData } from './actions';

class step1 extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <div className="card white w3-padding">
                    <h3 className="white">Informations personnelles : </h3>
                    <div className="w3-margin">
                        <Input className="w3-margin-right" placeholder="name" name="name" value={this.props.data.name} onChange={(e)=>{this.props.modif(e)}} />
                        <Input className="w3-margin-right" placeholder="surname" name="surname" value={this.props.data.surname} onChange={(e)=>{this.props.modif(e)}} />
                        <InputLabel className="w3-margin-right" htmlFor="age">age</InputLabel>
                        <Input className="w3-margin-right" label="age" name="age" type="number" value={this.props.data.age} onChange={(e)=>{this.props.modif(e)}} />
                        <Input placeholder="mail" name="mail" value={this.props.data.mail} onChange={(e)=>{this.props.modif(e)}} />
                    </div>
                </div>
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
        modif : getInputData
    }, dispatch);
}

export default connect(stateToProps, matchDispatchToProps)(step1);