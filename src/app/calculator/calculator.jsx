import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Calculator extends Component {
    render() {
        return (
            <div id="calculator" className="container py-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Złotówki" />
                            </div>
                            <div className="form-row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Wybrana Waluta" />
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option value="1" selected>Funty Brytyjski</option>
                                        <option value="2">Dolary Amerykańskie</option>
                                        <option value="3">Euro</option>
                                        <option value="4">Korony Czaskie</option>
                                        <option value="5">Hrywny</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;