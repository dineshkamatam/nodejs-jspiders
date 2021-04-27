//load third party module 
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "dineshkamatam4@gmail.com",
        pass: "dinidini12",
    },
});

//option 
let mailOptions = {
    from : "dineshkamatam4@gmail.com",
    to : "baluprakashpd@gmail.com",
    subject : "sending email from nodejs",
    html : `hiii balu i sent this mail through node js`,
} ;

transporter.sendMail(mailOptions,(err,info) => {
    if(err) throw err;
    console.log("mail sent"+info);
});