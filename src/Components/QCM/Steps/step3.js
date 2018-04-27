import React from 'react';
import { connect }                          from 'react-redux';
import { bindActionCreators, compose }      from 'redux';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import { ListItemText } from 'material-ui/List';
import Chip from 'material-ui/Chip';

import { addArrayAbo } from './actions';

const names = [
    "TCLi",
    "Ourà"
  ];
  

class step3 extends React.Component
{
    render()
    {
        console.log(this.props.data.abonnement);
        return(
            <div className="container">
                <div className="card white w3-padding">
                    <h3 className="white">Abonnements : </h3>
                    <div className="w3-margin">
                    <Select
                        multiple
                        placeholder="Abonnements"
                        value={this.props.data.abonnement}
                        onChange={(e)=>{this.props.modif(e.target.value)}}
                        input={<Input id="select-multiple" />}>
                        {
                            names.map(name => (
                            <MenuItem
                                key={name}
                                value={name}>
                                {name}
                            </MenuItem>))
                        }
                    </Select>
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
        modif : addArrayAbo
    }, dispatch);
}

export default connect(stateToProps, matchDispatchToProps)(step3);