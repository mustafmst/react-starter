import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{
    render(){
        return (
            <div>
                <div className="container text-center">
                    <h1 className="display-3 col-md-9 mx-auto mt-5">Welcome to React Starter Project</h1>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));