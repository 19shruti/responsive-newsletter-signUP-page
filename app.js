const express=require("express");
const bodyParser=require("body-parser");

const request=require("request");
const https = require("https");
const { options } = require("request");
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});



app.post("/",function(req,res){
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const email=req.body.email;
    console.log(firstname , lastname , email);
    var data={
        members:[{
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstname,
                LNAME:lastname

            }
        }
    ]
    };
    const jsonData=JSON.stringify(data);

// const url="https://us5.api.mailchimp.com/3.0/lists/e6b15d34de";
// const options={
//     method:"Post",
//     auth:"shrutiRaj:764a3090b413da0b8c4af43cdb647773-us5"
// }
// const request=https.request(url,options,function(response){

//   if(  response.statusCode === 200)
//   {
//       res.sendFile(__dirname+"/success.html")
//   }
//   else{
//       res.sendFile(__dirname+"/failure.html")
//   }

// response.on("data",function(data){
//     console.log(JSON.parse(data));
// })
// })
// request.write(jsonData);
// request.end();
// });


app.post("/failure",function(req,res){
    res.redirect("/");
});



app.listen(process.env.PORT||3000,function()
{
    console.log("the server is running is port 3000");
})

//

//e6b15d34de
