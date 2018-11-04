import React, { Component } from 'react';
import PropTypes from "prop-types";
import Toast from "./Toast";

export default class SubscribeSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loading: false,
            error: null
        };

    }

    openModal() {
        this.setState({
            showModal: true,
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    onSubscribeSuccess(method, response) {
        console.log('logged successfully with ' + method);
    }

    onSubscribeFail(method, response) {
        console.log('logging failed with ' + method);
        this.setState({
            error: response
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    afterTabsChange() {
        this.setState({
            error: null
        });
    }

    handleClick(event) {
        event.preventDefault();
        const first_name = this.refs.first_name;
        const last_name = this.refs.last_name;
        const email = this.refs.email;
        const creds = {
            first_name: first_name.value.trim(),
            last_name: last_name.value.trim(),
            email: email.value.trim()
        };
        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(creds)
        };
        fetch(`${API_HOST}/api/subscribe`, config)
        .then((resp) =>  {
            if (resp.status === 200) {
                Toast.success('订阅成功！');
            } else {
                Toast.error('有错误发生，请稍候重新再试.');
                console.log("Error: ", err)
            }
        });
        //this.props.onLoginClick(creds);
    }

    render() {
        const { errorMessage } = this.props;

        return (
            <section className="signup-section section">
                <div className="section-inner">
                    <div className="container text-center">
                        <div className="counter-container">
                        </div>{/*counter-container*/}
                        <h2 className="counter-desc">Receive Course Packet</h2>

                        <div className="form-wrapper">
                            <h2 className="form-title">Subscribe to course update</h2>
                            <div className="form-box">
                                <h3 className="form-heading">Subscribe Now</h3>
                                <div className="form-desc">Recieving exclusive job referral information</div>
                                <form className="signup-form">
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <label htmlFor="firstname" className="sr-only">First Name</label>
                                            <input type="text" className="form-control" ref="first_name" name="first_name" placeholder="First Name"/>
                                        </div>{/*form-group*/}
                                        <div className="form-group col-12">
                                            <label htmlFor="lastname" className="sr-only">Last Name</label>
                                            <input type="text" className="form-control" ref="last_name" name="last_name" placeholder="Last Name"/>
                                        </div>{/*form-group*/}
                                        <div className="form-group col-12">
                                            <label htmlFor="firstname" className="sr-only">Email Address</label>
                                            <input type="email" className="form-control" ref="email" name="email" placeholder="Email Address"/>
                                        </div>{/*form-group*/}
                                    </div>{/*row*/}
                                    <button className="btn btn-primary btn-cta" onClick={(event) => this.handleClick(event)}>Subscribe</button>
                                </form>{/*form*/}
                            </div>{/*form-box*/}
                        </div>
                    </div>
                </div>
            </section>

        );
    };
};

SubscribeSection.propTypes = {
    //onLoginClick: PropTypes.func.isRequired,
    //errorMessage: PropTypes.string
};