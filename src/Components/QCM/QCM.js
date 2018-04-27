import React from 'react';
import { connect }                          from 'react-redux';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Button from 'material-ui/Button';
import { Fetch } from 'react-request';

import Step1 from './Steps/step1';
import Step2 from './Steps/step2';
import Step3 from './Steps/step3';
import Step4 from './Steps/step4';

function getSteps() {
    return ['Informations personnelles', 'Transport favoris', 'Abonnments', 'Lieux favoris'];
  }

function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
		return <Step3 />;
		case 3:
        return <Step4 />;
      default:
        return <h3 className="white center">Appuyez sur Valider pour finir le questionnaire.</h3>
    }
  }

class QCM extends React.Component
{
      constructor(props)
      {
          super(props);
          this.state = {
            activeStep: 0,
          }
      }
    
      handleNext() {
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep + 1,
        });
      };
    
      handleBack(){
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep - 1,
        });
      };
    
    handleReset() {
        this.setState({
          activeStep: 0,
        });
      };

    static getDataInput(e)
    {
        this.state =
        {
            activeStep : this.state.activeStep,
            [e.target] : [e.target.value]
        }
    } 

    nextButton()
    {
        if (this.state.activeStep < 4)
            this.handleNext()
        else
        {
            /*<Fetch
                url="http://127.0.0.1/profile" 
                method="POST"
                body={JSON.stringify(this.props.data)} />*/
            
               

        }
    }

    validay()
    {
        if (this.state.activeStep >= 4)
        {
            return <Fetch
                        url="http://127.0.0.1/profile"
                        lazy={true}
                        headers={
                            {
                                "content-type" : "application/json",
                                "mode" : 'no-cors'
                            }
                        }
                        method="POST"
                        body={JSON.stringify(this.props.data)}>
                        {({ doFetch }) => {
                            return <Button variant="raised" color="primary" onClick={()=> {doFetch()}}>
                            {this.state.activeStep >= 4 ? 'Valider' : 'Suivant'}
                        </Button>
                        }}
                        </Fetch>
        }
        else
        {
            return <Button variant="raised" color="primary" onClick={()=> {this.nextButton()}}>
            {this.state.activeStep >= 4 ? 'Valider' : 'Suivant'}
        </Button>
        }
    }

    render()
    {
        const steps = getSteps();
		const { activeStep } = this.state;
		console.log(activeStep);
        return(
            <div>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {getStepContent(activeStep)}
                </div>
				<div className="w3-display-bottomright">
					<Button
					disabled={activeStep === 0}
					onClick={()=> {this.handleBack()}}>
						Retour
					</Button>
					{
                        this.validay()
                    }
                    
				</div>
            </div>
        )
    }
}

function stateToProps(state)
{
    return {
        data : state.Form
    }
}

export default connect(stateToProps)(QCM);


/*
JSON.stringify({
                                nom : "aa",
                                espece : "aa",
                                sexe : "aa",
                                description : "aa"
                            })
*/