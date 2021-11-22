const nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user:'nifasatb@gmail.com',
            pass: 'NNNddf346'
        }
    }
)

var mailOptions = {
    from: 'nifasatb@gmail.com',
    to: 'mohd.beg@walchandsangli.ac.in',
    subject: 'NodeMailer example',
    text:'This is the body of the mail'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email Was Sent" + info.response);
    }
})