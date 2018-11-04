import React, { Component } from 'react';
import PropTypes from "prop-types";
import Login from './Login';
import Logout from './Logout';
import { loginUser } from '../actions/Login';
import { logoutUser } from '../actions/Logout';
import '../scss/theme-1.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarCollapsed: true
        };
    }

    toggleNavBar(event) {
        this.setState({navbarCollapsed: !this.state.navbarCollapsed});
    }

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <h1 className="logo">
                        <Link to="/">
                            <img src={require('../images/logos/logo-no-text.svg')} alt="Logo"/>
                            <span>ASCENDING</span>
                        </Link>
                    </h1>
                    <nav className="main-nav navbar navbar-right navbar-expand-md">
                        <button className={this.state.navbarCollapsed ?  "navbar-toggler collapsed" : "navbar-toggler"} type="button" onClick={(event) => this.toggleNavBar(event)}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </button>
                        <div id="navbar-collapse" className={this.state.navbarCollapsed ?  "navbar-collapse collapse" : "navbar-collapse"}>
                            <ul className="nav navbar-nav">
                                <li className="active nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item"><a href="/#overview-section" className="nav-link scrollto">Study Plan</a></li>
                                <li className="nav-item"><a href="/#features-section" className="nav-link scrollto">Free Trial</a></li>
                                <li className="nav-item"><a href="/#customers-section" className="nav-link scrollto">Testimony</a></li>
                                {/*
                                <li className="nav-item dropdown">
                                    <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">More <i className="fa fa-angle-down"></i></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link to="/about" className="dropdown-item">About Us</Link>
                                        <a href="https://blog.frugalops.com" target="_blank" className="dropdown-item">Blog</a>
                                        <Link to="/support" className="dropdown-item">Support Center</Link>
                                        <Link to="/career" className="dropdown-item">Career</Link>
                                        <Link to="/contact" className="dropdown-item">Contact</Link>
                                    </div>
                                </li>
                                */}
                                <li className="nav-item">
                                    {!isAuthenticated && false &&
                                    <Login
                                        errorMessage={errorMessage}
                                        onLoginClick={ creds => dispatch(loginUser(creds)) }
                                        />
                                    }
                                    {isAuthenticated && false &&
                                    <Logout onLogoutClick={() => dispatch(logoutUser())} />
                                    }
                                </li>
                                {!isAuthenticated && false &&
                                <li className="nav-item nav-item-cta last"><a className="btn-signup" href="#"
                                                                              data-toggle="modal"
                                                                              data-target="#signup-modal">Sign Up</a></li>
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}

export default Header;