import React, { Component } from 'react';

export default class Notice extends Component {
    render() {
        const icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-warning-circle',
            error: 'fa-ban',
            loading: 'fa-loading'
        };
        const { type, content } = this.props;
        return (
            <div className={`toast-notice ${type}`}>
                <i className={`fa ${icons[type]}`}></i>
                <span>{content}</span>
            </div>
        );
    };
}