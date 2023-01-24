const nodemailer=require('nodemailer');
let mailTransporter=nodemailer.createTransport({
    service:"gmail",
auth:{
    user:"youremail@gmail.com",
    pass:"yourpassword"
}
})
let details={
    from:"youremail@gmail.com",
    to:"friendemail@gmail.com",
 subject:"testing our nodemailer",
 text:"testing our first sender"
}
mailTransporter.sendMail(details,(err)=>{
    if (err){
        console.log("it has an error",err)
    }
    else{
        console.log("email has sent")
    }
});