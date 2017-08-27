import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="navigation"  className="navbar bg-info text-white">
                    <div className="container">
                        <a href="#" className="navbar-brand text-white"> <i className="fa fa-money"></i> Przelicznik Walut</a>
                        <button className="navbar-toggler navbar-toggler-right">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;