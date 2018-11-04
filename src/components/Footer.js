import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/theme-1.scss';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-6 col-md-3">
                        <div className="footer-col-inner">
                            <h3 className="col-title">About</h3>
                            <ul className="footer-menu list-unstyled">
                                <li><a href="#">Company</a></li>
                                <li><a href="https://blog.frugalops.com" target="_blank">Tech Blog</a></li>
                                <li><a href="https://www.indeedjobs.com/ascending/_hl/en_US?cpref=JXWAtnzf3XWjLOi4YeVNLhRSoEeMyZTo-ZulnIChlVU" target="_blank">Jobs</a> <span className="badge badge-success">We're hiring</span></li>
                                {/*hero-slider-wrapper<li><a href="#">Press</a></li>
                                <li><a href="#">Contact</a></li>*/}
                            </ul>
                        </div>{/*footer-col-inner*/}
                    </div>{/*footer-col*/}
                    {/*<div className="footer-col col-6 col-md-3">
                        <div className="footer-col-inner">
                            <h3 className="col-title">Product</h3>
                            <ul className="footer-menu list-unstyled">
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Tutorials</a></li>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Customers</a></li>
                            </ul>
                        </div>
                    </div>*/}
                    <div className="footer-col col-6 col-md-3">
                        <div className="footer-col-inner">
                            <h3 className="col-title">Useful Links</h3>
                            <ul className="footer-menu list-unstyled">
                                {/*<li><a href="#">Sign up</a></li>
                                <li><a href="#">Login</a></li>*/}
                                <li><a href="#">Become our partner</a></li>
                                <li><Link to="/faq">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>{/*footer-col*/}
                    {/*<div className="footer-col col-6 col-md-3">
                        <div className="footer-col-inner">
                            <h3 className="col-title">Legal</h3>
                            <ul className="footer-menu list-unstyled">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms of Services</a></li>
                                <li><a href="#">Policies</a></li>
                            </ul>
                        </div>
                    </div>*/}
                </div>{/*row*/}
                <div className="divider"></div>
                <div className="footer-bottom text-center">
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/ascendingllc/" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                    </ul>
                    <small className="copyright">Copyright @ <Link to="#">ASCENDING LLC</Link></small>
                </div>
            </div>{/*container*/}
        </footer>
    );
  }
}

export default Footer;