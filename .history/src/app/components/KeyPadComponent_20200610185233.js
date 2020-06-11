import React, {Component} from 'react';
import App from '../App';

export default class KeyPadComponent extends Component {

    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };



    render() {
        return (
            

           
            <div className= "center-align">
            <div>
            <button className="waves-effect waves-light btn-large" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
            <button className="waves-effect waves-light btn-large" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
            <button className="waves-effect waves-light btn-large" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
            <button className="waves-effect waves-light btn-large" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
            </div>
            <br/>

            <div>
            <button className="waves-effect waves-light btn-large" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button className="waves-effect waves-light btn-large" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button className="waves-effect waves-light btn-large" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button className="waves-effect waves-light btn-large" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
            </div>
            <br/>
            <div>
            <button className="waves-effect waves-light btn-large" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button className="waves-effect waves-light btn-large" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button className="waves-effect waves-light btn-large" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button className="waves-effect waves-light btn-large" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
            </div>
            <br/>
            <div>
                <button className="waves-effect waves-light btn-large" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="waves-effect waves-light btn-large" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="waves-effect waves-light btn-large" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="waves-effect waves-light btn-large" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
            </div>
            <br/>
            <div>
                <button className="waves-effect waves-light btn-large" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="waves-effect waves-light btn-large" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="waves-effect waves-light btn-large" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="waves-effect waves-light btn-large" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
            </div>

            </div>

            
        );
    }
}


