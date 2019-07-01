const{model,Schema} = require('mongoose')
const plm= require('passport-local-mongoose')

const UserSchema= new Schema({
  username:String,
  password:String
},{
  timestamps:true,
  versionKey:false
})

UserSchema.plugin(plm,{usernameFile:'username'})
module.exports= model('User', UserSchema)