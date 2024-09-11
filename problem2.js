function sendNotification(email) {
    if(!email.includes('@')) {
        return 'Invalid Email';
    }

    const emailBody = email.split('@');
    const notification = emailBody[0] + ' sent you an email from ' + emailBody[1];
    return notification;
}

const result = sendNotification('sadia8icloud.com');
console.log(result);
