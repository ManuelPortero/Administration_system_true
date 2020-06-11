import React, {Component} from 'react';

class KeyPadComponent extends Component {

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


export default KeyPadComponent;