import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Notice from './Notice';

export default class Notification extends Component {
    constructor() {
        super();
        this.transitionTime = 300;
        this.state = { notices: [] };
        this.removeNotice = this.removeNotice.bind(this);
    }

    getNoticeKey() {
        const { notices } = this.state;
        return `notice-${new Date().getTime()}-${notices.length}`;
    }

    addNotice(notice) {
        const { notices } = this.state;
        notice.key = this.getNoticeKey();
        if (notices.every(item => item.key !== notice.key)) {
            notices[0] = notice;
            this.setState({ notices });
            if (notice.duration > 0) {
                setTimeout(() => {
                    this.removeNotice(notice.key);
                }, notice.duration);
            }
        }
        return () => { this.removeNotice(notice.key) };
    }

    removeNotice(key) {
        this.setState(previousState => ({
            notices: previousState.notices.filter((notice) => {
                if (notice.key === key) {
                    if (notice.onClose) {
                        notice.onClose();
                    }
                    return false;
                }
                return true;
            })
        }));
    }

    render() {
        const { notices } = this.state;
        return (
            <TransitionGroup className="toast-notification">
                {
                    notices.map(notice => (
                        <CSSTransition
                            key={notice.key}
                            classNames="toast-notice-wrapper notice"
                            timeout={this.transitionTime}
                            >
                            <Notice {...notice} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        );
    }
}