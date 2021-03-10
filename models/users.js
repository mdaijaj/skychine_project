const mongoose=require('../database/db')
const uniqueValidator = require('mongoose-unique-validator')

let user_schema= new mongoose.Schema({
   client_name: {
      type: String, 
      required:true,
   },
   email: {
      type:String,   
      required: true,
      unique: true
   },
   password: {
      type:String,   
      required: true
   },
   address: {
      type:String,   
      required: true
   },
   phone: {
      type:Number,
      required: true,
   },
   image: {
      type: String
   }
}, {timestamps: true});     

user_schema.plugin(uniqueValidator)
module.exports= mongoose.model('client', user_schema);