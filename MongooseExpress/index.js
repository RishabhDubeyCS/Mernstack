const express =require ("express");
     const app = express();//app is an object of express
    const mongoose = require("mongoose");
  const path = require("path");
   const Chat= require("./models/chat.js");//importing the chat model
  
    
  
  main()//
    .then(()=>{console.log ("Connection Successfull")})
    .catch(err => console.log(err));
    
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
      
      }


app.set("views",path.join(__dirname,"views"));//setting the views directory
 app.set("view engine ","ejs");//setting the view engine
 app.use (express.static(path.join(__dirname,"public")));//setting the public directory
 app.use (express.urlencoded( {extended:true}));//using the express.urlencoded middleware

//..............................................
//Index Route
app.get ("/chats", async (req, res )=>//creating a route for chats
{
   let chats=await Chat.find();  //fetching all the chats from the database
    res.render("index.ejs", {chats});//rendering the index.ejs file
})

//.......................NEW ROUTE......................
app.get("/chats/new", (req,res) =>{
  res.render("new.ejs");//rendering the new.ejs file
});

app.post( "/chats", (req, res)=>{//creating a route for chats)
let {form, to, msg} =req.body;//destructuring the form, to and msg from the request body
let newChat = new Chat ({
  form: form,
   to: to,
  msg:msg,
    created_at:new Date()//
  })
  console.log(newChat);
  res.send("working");
  
  
    
});

//saving the new chat to the database
 
//................................................

app.get("/chats/login", (req, res) => {
    res.render("login.ejs"); //rendering the Registration form.ejs file
  });




      app.get("/", (req, res)=>{
        res.send("Root is working "); .
      });


      app.listen(8080, ()=>{
        console.log("Server is listening on port 8080")
      }
)