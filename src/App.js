import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import Stories from './components/Stories';
import Pricing from './components/Pricing';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Support from './components/Support';
import Faq from './components/Faq';

import 'font-awesome/css/font-awesome.css';

class App extends Component {
  componentDidMount(){

  }
  render() {
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props;
    return (
        <Router>
          <div>
            <Header
                isAuthenticated={isAuthenticated}
                errorMessage={errorMessage}
                dispatch={dispatch}
            />
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/features' component={Features} />
              <Route path='/stories' component={Stories} />
              <Route path='/pricing' component={Pricing} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
              <Route path='/support' component={Support} />
              <Route path='/career' component={Career} />
              <Route path='/contact' component={Contact} />
              <Route path='/faq' component={Faq} />
            </Switch>
            <Footer />
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { quotes, auth } = state;
  const { quote, authenticated } = quotes;
  const { isAuthenticated, errorMessage } = auth;

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App);