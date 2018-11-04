import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import SubscribeSection from './SubscribeSection';
import { subscribe } from '../actions/Subscribe';
import moment from 'moment';

import '../css/bootstrap.css';
import '../scss/theme-1.scss';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {eventbrite: {}};
    }

    componentDidMount() {
      window.scrollTo(0,0);
      window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: `${EVENTBRITE_EVENT_ID}`,
          modal: true,
          modalTriggerElementId: `eventbrite-widget-modal-trigger-${EVENTBRITE_EVENT_ID}`,
          onOrderComplete: function(){} // Method called when an order has successfully completed
      });
      fetch(`${API_HOST}/api/eventbrite/event/${EVENTBRITE_EVENT_ID}`)
      .then((resp) =>  resp.json()).then((result) =>
          this.setState({
              eventbrite: {
                  title: result.name.text,
                  start: moment(result.start.local).format('MM-DD-YYYY HH:mm'),
                  end: moment(result.end.local).format('MM-DD-YYYY HH:mm')
              }
          })
      );
  }
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
    <div>
        <section className="promo-section section section-on-bg">
            <div className="hero-slider-wrapper">
                {/*<div className="flexslider hero-slider">
                    <ul className="slides">
                        <li className="slide slide-1"></li>
                        <li className="slide slide-2"></li>
                        <li className="slide slide-3"></li>
                    </ul>
                </div>
                <div className="hero-slider-mask"></div>*/}
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={6000}>
                    <div>
                        <div className="slide-bg slide-bg-1"></div>
                        <div className="slide-mask"></div>
                        <div className="promo-content">
                            <div className="container">
                                <h2 className="headline">Onsite Bootcamp interactive class</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-bg slide-bg-2"></div>
                        <div className="slide-mask"></div>
                        <div className="promo-content">
                            <div className="container">
                                <h2 className="headline">Hands-on program experience, learning by doing</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-bg slide-bg-3"></div>
                        <div className="slide-mask"></div>
                        <div className="promo-content">
                            <div className="container">
                                <h2 className="headline">All-in-one career-oriented coaching program: Coding, Mock interview，Employment Referral</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-bg slide-bg-4"></div>
                        <div className="slide-mask"></div>
                        <div className="promo-content">
                            <div className="container">
                                <h2 className="headline">100% graduated students got dream offers</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-bg slide-bg-5"></div>
                        <div className="slide-mask"></div>
                        <div className="promo-content">
                            <div className="container">
                                <h2 className="headline">English/Chinese bilingual coach program</h2>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>{/*hero-slider-wrapper*/}
            {/*
            <div className="container promo-content">
                <h2 className="headline">The Perfect Design Framework <br/>for Startup Businesses</h2>
                <p className="tagline">Good design is good business, try our demo today!</p>
                <div className="actions">
                    <a className="btn btn-cta btn-primary" href="#" data-toggle="modal" data-target="#signup-modal">Start Free Trial</a>
                    <br className="d-sm-inline-block d-md-none"/>
                    <a href="#" className="play-trigger" data-toggle="modal" data-target="#modal-video" >
                        <img className="play-icon" src={require('../images/play-icon.svg')} alt=""/>See how it works
                    </a>
                </div>
            </div>{/*container*/}
        </section>
        {/*<div className="page-nav-space-holder d-none d-md-block">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
                <div className="container">
                    <ul id="page-nav" className="nav page-nav list-inline">
                        <li className="nav-item"><a className="nav-link scrollto" href="#overview-section">Overview</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href="#features-section">Key Features</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href="#customers-section">Customers</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href="#signup-section">Get Started</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href="#support-section">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>*/}
        
        <section id="overview-section" className="overview-section section">
            <h2 className="section-title">14 Weeks Study Plan</h2>
            <div className="section-intro">A Dream Offer is Only 14 Weeks Away</div>
            <div className="figures-wrapper">
                <div className="container text-center" style={{position:"relative"}}>
                    <div className="plans-list">
                        <img className="img-fluid desktop" src={require('../images/flow.png')} alt=""/>
                        <img className="img-fluid mobile" src={require('../images/flow-mobile.png')} alt=""/>
                        <div className="plan-step step1">
                            <h3>Code Fundamentals</h3>
                            <p>Start by understanding coding essential, Linux bash, Git, Docker, Database</p>
                        </div>
                        <div className="plan-step step2">
                            <h3>MVC</h3>
                            <p>Hands-on java basic and MVC concept in SpringMVC</p>
                        </div>
                        <div className="plan-step step3">
                            <h3>Authentication &amp; Authorization</h3>
                            <p>Understand and Practice on spring security</p>
                        </div>
                        <div className="plan-step step4">
                            <h3>Third Party Integration and Async Processor</h3>
                            <p>Learning java advance and third party and AWS cloud integration</p>
                        </div>
                        <div className="plan-step step5">
                            <h3>Advance AWS Architecture</h3>
                            <p>Optimize application to adopt cloud architecture, CI/CD, final deployment</p>
                        </div>
                        <div className="plan-step step6">
                            <h3>Career Service</h3>
                            <p>Job hunt, Job referral and mock technical interview</p>
                        </div>
                    </div>
                </div>{/*container*/}
            </div>{/*figures-wrapper*/}
            <div className="benefits-wrapper">
                <div className="container text-center">
                    <div className="row">
                        <div className="item col-12 col-md-6">
                            <div className="item-inner">
                                <img className="item-avatar" src={require('../images/team/ryo.jpg')} alt=""/>
                                <h3 className="item-title">Ryo Hang</h3>
                                <div className="item-desc">
                                    12+ years Software Development Experience<br/>CTO of several startups<br/>
                                    Full Stack Engineer/AWS Cloud Architecture<br/>Hiring Manager for several Fortune 500 companies
                                </div>
                            </div>{/*item-inner*/}
                        </div>{/*item*/}
                        <div className="item col-12 col-md-6">
                            <div className="item-inner">
                                <img className="item-avatar" src={require('../images/team/gloria.jpg')} alt=""/>
                                <h3 className="item-title">Gloria Zhang</h3>
                                <div className="item-desc">
                                    10+ years Technical Recruiter<br/>Personal Branding Expert
                                </div>
                                <a className="btn btn-ghost btn-linkedin btn-sm" href="https://www.linkedin.com/company/ascendingllc/" target="_blank">
                                    <img className="white" src={require('../images/linkedin.png')} width="100"/>
                                    <img className="black" src={require('../images/linkedin-black.png')} width="100"/>
                                </a>
                            </div>{/*item-inner*/}
                        </div>{/*item*/}
                    </div>{/*row*/}
                </div>{/*container*/}
            </div>{/*benefits*/}
           {/* <div className="press-wrapper">
                <div className="container">
                    <div className="logos row">
                        <div className="logo col-6 col-md-3"><img className="img-fluid" src={require('../images/logos/logo-1.svg')} alt=""/></div>
                        <div className="logo col-6 col-md-3"><img className="img-fluid" src={require('../images/logos/logo-2.svg')} alt=""/></div>
                        <div className="logo col-6 col-md-3"><img className="img-fluid" src={require('../images/logos/logo-3.svg')} alt=""/></div>
                        <div className="logo col-6 col-md-3"><img className="img-fluid" src={require('../images/logos/logo-4.svg')} alt=""/></div>
                    </div>
                </div>
            </div>*/}
        </section>{/*overview-section*/}

        <section id="features-section" className="features-section section">
            <h2 className="section-title">
                Sign Up Free Course
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 com-lg-7 map-container">
                       <iframe width="100%" height="100%" src="https://maps.google.com/maps?q=8609%20Westwood%20Center%20Dr%23110%20Vienna%2C%20VA%2022182&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                    <div className="features-content-wrapper col-12 col-md-6 com-lg-5">
                        <div className="inner">
                            <h3 className="heading">{this.state.eventbrite.title}</h3>
                            <div className="desc">
                                <p><strong>Address: </strong>8609 Westwood Center Dr | #110 | Vienna, VA 22182</p>
                                <p><strong>Schedule: </strong>{this.state.eventbrite.start} ~ {this.state.eventbrite.end}</p>
                            </div>
                            <a id={`eventbrite-widget-modal-trigger-${EVENTBRITE_EVENT_ID}`} className="btn btn-ghost">Join Us</a>
                        </div>
                    </div>{/*features-content-wrapper*/}
                </div>{/*row*/}
            </div>{/*container*/}
        </section>{/*features-section*/}

        <section id="customers-section" className="customers-section section">
            <h2 className="section-title">Testimony</h2>
            <div className="section-intro">Learn what our students have to say</div>
            <div className="container">
                <div className="stories-wrapper row">
                    <div className="item item-1 col-12 col-md-6">
                        <div className="item-inner text-center">
                            <div className="item-mask"></div>
                            <div className="item-content">
                                <h3 className="content-title">10 weeks training helped me got a dozen interviews and eventually got an offer from Google</h3>
                                <div className="content-desc">
                                    <span className="icon-holder">
                                        <i className="fa fa-quote-left" ></i>
                                    </span>
                                    <p>Before I met Ryo, I applied many positions but never got response. I had an idea about webapp, but I have zero information about where to start. I joined ASCENDING later through a friend. Our training last more than two months. He gave me practical projects to practice and assigned me “homework”. With his detailed explanations, I learnt so many things that I never had learned from college. It is a huge help for me to gain technical development skill as a pro, which later became the major reason of getting interviews and the offer from Google.</p>
                                </div>
                            </div>{/*item-content*/}
                        </div>{/*item-inner*/}
                    </div>{/*item*/}
                    <div className="item item-2 col-12 col-md-6">
                        <div className="item-inner text-center">
                            <div className="item-mask"></div>
                            <div className="item-content">
                                <h3 className="content-title">I have learnt so many things that professors never taught in college</h3>
                                <div className="content-desc">
                                    <span className="icon-holder">
                                        <i className="fa fa-quote-left" ></i>
                                    </span>
                                    <p>I feel what Ryo taught in class is very helpful for job hunting. I have learnt so many things that they will never teach you in the college. The program here actually covers the most important skills and knowledge that you need to know during job hunting and interview. It gives me advantages to compete with my peers-fresh graduates without professional training at ASCENDING. Ryo is responsible and patient to any questions. Highly recommend!</p>
                                </div>
                            </div>{/*item-content*/}
                        </div>{/*item-inner*/}
                    </div>{/*item*/}
                    <div className="item item-3 col-12 col-md-6">
                        <div className="item-inner text-center">
                            <div className="item-mask"></div>
                            <div className="item-content">
                                <h3 className="content-title">The instructor is very considerate and thoughtful and the class atmosphere is full of passion and energy</h3>
                                <div className="content-desc">
                                    <span className="icon-holder">
                                        <i className="fa fa-quote-left" ></i>
                                    </span>
                                    <p>Taking class at ASCENDING is quite an experience. So many new things to learn! And Ryo always use the most comprehensive way to explain abstract theory to us. I really admire his teaching attitude. The class atmosphere is full of passion and energy. There is no pressure and it is easy to learn in this way.</p>
                                </div>
                            </div>{/*item-content*/}
                        </div>{/*item-inner*/}
                    </div>{/*item*/}
                    <div className="item item-4 col-12 col-md-6">
                        <div className="item-inner text-center">
                            <div className="item-mask"></div>
                            <div className="item-content">
                                <h3 className="content-title">The teaching style is detail-oriented and the information and knowledge taught during the course is very close to real world</h3>
                                <div className="content-desc">
                                    <span className="icon-holder">
                                        <i className="fa fa-quote-left"></i>
                                    </span>
                                    <p>Ryo is a very patient teacher. His teaching style is detail-oriented and the information and knowledge taught during the course is very close to real world. The air in the class is very relaxing. We discussed together which makes the class fun and engagable. Ryo also tutored us one-on-one to provide personalized solutions to different students. Attending class here is a serious help to find a dream job.</p>
                                </div>
                            </div>{/*item-content*/}
                        </div>{/*item-inner*/}
                    </div>{/*item*/}
                </div>{/*row*/}
                {/*<div className="action-wrapper text-center">
                    <Link className="btn btn-secondary" to="/stories">All Customer Stories</Link>
                </div>*/}
            </div>{/*container*/}
        </section>{/*customers-section*/}

        <SubscribeSection />

        <section id="support-section" className="support-section section text-center">
            <h2 className="section-title">Scan to follow WeChat Account</h2>
            <div className="team-figure">
                <img src={require('../images/WechatIMG116.jpg')} />
            </div>
        </section>

        {/*<section className="apps-section section text-center">
            <h2 className="section-title">Download Our Apps</h2>
            <div className="container">
                <ul className="apps-list list-inline">
                    <li className="list-inline-item"><a className="btn btn-download-app btn-apple-download" href="#"><i className="fa fa-apple" ></i> <span className="btn-text"><span className="intro-text">Download on the</span><span className="main-text">App Store</span></span></a></li>
                    <li className="list-inline-item"><a className="btn btn-download-app btn-andriod-download" href="#"><i className="fa fa-android" ></i> <span className="btn-text"><span className="intro-text">Get it on</span><span className="main-text">Google Play</span></span></a></li>
                    <li className="list-inline-item"><a className="btn btn-download-app btn-windows-download" href="#"><i className="fa fa-windows" ></i> <span className="btn-text"><span className="intro-text">Download from</span><span className="main-text">Windows Phone Store</span></span></a></li>
                </ul>
            </div>
        </section>apps-section*/}

        <div className="modal modal-video hidden" id="modal-video" tabIndex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 id="videoModalLabel" className="modal-title sr-only">Video Tour</h4>
                    </div>
                    <div className="modal-body">
                        <div className="video-container embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" id="vimeo-video" src="https://player.vimeo.com/video/140875675?" width="720" height="405" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe>
                        </div>{/*video-container*/}
                    </div>{/*modal-body*/}
                </div>{/*modal-content*/}
            </div>{/*modal-dialog*/}
        </div>{/*modal*/}

        <div className="modal modal-auth modal-signup hidden" id="signup-modal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 id="signupModalLabel" className="modal-title text-center">Sign up to start your 30 day free trial!</h4>
                    </div>
                    <div className="modal-body">
                        <div className="login-form-container">
                            <form className="login-form">
                                <div className="form-group full-name">
                                    <i className="material-icons icon">&#xE7FD;</i>
                                    <label className="sr-only" htmlFor="signup-fullname">Your Full Name</label>
                                    <input id="signup-fullname" name="signup-fullname" type="text" className="form-control signup-email" placeholder="Your Full Name"/>
                                </div>{/*form-group*/}
                                <div className="form-group email">
                                    <i className="material-icons icon">&#xE0BE;</i>
                                    <label className="sr-only" htmlFor="signup-email">Your Email</label>
                                    <input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Your Email"/>
                                </div>{/*form-group*/}
                                <div className="form-group password">
                                    <i className="material-icons icon">&#xE897;</i>
                                    <label className="sr-only" htmlFor="signup-password">Create a Password</label>
                                    <input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a Password"/>
                                </div>{/*form-group*/}
                                <div className="legal-note">By signing up, you agree to our terms of services and privacy policy.</div>
                                <button type="submit" className="btn btn-block btn-primary btn-cta">Sign up</button>
                            </form>
                        </div>{/*login-form-container*/}
                    </div>{/*modal-body*/}
                </div>{/*modal-content*/}
            </div>{/*modal-dialog*/}
        </div>{/*modal*/}

        <div className="modal modal-auth modal-resetpass hidden" id="resetpass-modal" tabIndex="-1" role="dialog" aria-labelledby="resetpassModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 id="resetpassModalLabel" className="modal-title text-center">Forgot your password?</h4>
                    </div>
                    <div className="modal-body">
                        <div className="resetpass-form-container">
                            <p className="intro">We'll email you a link to a page where you can easily create a new password.</p>
                            <form className="resetpass-form">
                                <div className="form-group email">
                                    <label className="sr-only" htmlFor="reg-email">Your Email</label>
                                    <input id="reg-email" name="reg-email" type="email" className="form-control login-email" placeholder="Your Email"/>
                                </div>{/*form-group*/}
                                <button type="submit" className="btn btn-block btn-secondary btn-cta">Reset Password</button>
                            </form>
                        </div>{/*login-form-container*/}
                        <div className="option-container">
                            <div className="lead-text">I want to <a className="back-to-login-link" id="back-to-login-link" href="#">return to login</a></div>
                        </div>{/*option-container*/}
                    </div>{/*modal-body*/}
                </div>{/*modal-content*/}
            </div>{/*modal-dialog*/}
        </div>{/*modal*/}
    </div>
    );
  }
}

Home.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    //isAuthenticated: PropTypes.bool.isRequired,
    //errorMessage: PropTypes.string
}

export default Home;