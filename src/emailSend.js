var nodemailer = require('nodemailer');

module.exports = {

    emailSend: () => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'talentedexpert0057@gmail.com',
                pass: 'rjadmstmdsiddl'
            }
        });
        
        var mailOptions = {
            from: 'talentedexpert0057@gmail.com',
            to: 'petpanda0057@gmail.com',
            subject: 'Testing email',
            text: 'OK, Great, you received first testing Email!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}