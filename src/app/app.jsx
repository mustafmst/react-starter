import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Navbar from './navbar/navbar.jsx';
import Calculator from './calculator/calculator.jsx'

class App extends Component{
    render(){
        return (
            <div>
                <Navbar/>
                <div className="py-5">
                    <Calculator/>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));