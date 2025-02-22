const mongoose = require("mongoose");//importing mongoose
 const chatSchema = new mongoose.Schema({//creating a schema for chat
from:{
         type:String ,//from is a string
          required:true//from is a required field
    },
 to: {
        type:String,
       required:true
     },
msg:{
        type:String,
        maxLength:50
    },
created_at:{ 
  type:String,
  required:true
}
 });
  const Chat = mongoose.model("Chat", chatSchema); // Creating a model for chat
  module.exports=Chat;
