import React, {Component} from 'react';
import App from '../App';

export default class ResultCalculator extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}

