import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';
import '../scss/toast.scss';

function createNotification() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notification />, div);
    return {
        addNotice(notice) {
            return notification.addNotice(notice);
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}

let notification;
const notice = (type, content, duration = 3000, onClose) => {
    if (!notification) notification = createNotification();
    return notification.addNotice({ type, content, duration, onClose });
}

export default {
    info(content, duration, onClose) {
        return notice('info', content, duration, onClose);
    },
    success(content, duration, onClose) {
        return notice('success', content, duration, onClose);
    },
    warning(content, duration, onClose) {
        return notice('warning', content, duration, onClose);
    },
    error(content, duration, onClose) {
        return notice('error', content, duration, onClose);
    },
    loading(content, duration = 0, onClose) {
        return notice('loading', content, duration, onClose);
    }
}