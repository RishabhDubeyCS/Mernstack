const mongoose = require("mongoose");
const Chat= require("./models/chat.js");//importing the chat model
main()
.then(()=>{console.log ("Connection Successfull")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
  

  }


 let allchat=[//creating an array of objects
    {
    from:"Astha",
    to: "Saritadubey",
    msg:"love you mom ",
    created_at: new Date()//creating a new date
      },
      {
        
        from:"Neha ",
        to: "Astha ",
        msg:"Hello Astha ",
        created_at: new Date()
      },
      {
        from:"Kavya",
        to: "Sarita",
        msg:"hello Sarita i am Kavya!!!!! ",
        created_at: new Date()
      },
      {
        from:"Rishabh",
        to: "Astha",
        msg:"Hello Astha ",
        created_at: new Date()
      }
    
];
   Chat.insertMany(allchat);//inserting all the chats into the database

