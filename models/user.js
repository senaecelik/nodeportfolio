

const mongoose = require("mongoose")

const UserShema = new mongoose.Schema({
      name: {
            type: String,
            required:true
      },
      surname:{
            type: String,
            required: true
      },
      image:{
            type: String
      },
      job_list:{
            type: Array
      },
      socialLink: {
            instagram: { type: String },
            linkedin: { type: String },
            github: { type: String },
            medium: { type: String },
      },
      about: {
            title: { type: String },
            description: { type: String }, 
            
      },
      project:{
            
           title: {type: String},
           subTitle: {type: String},
           image: {type: String},
            link: {type:String},
            type: Array
      },
      adress:{
            type:String
      },
      email:{
            type:String
      },
      resumeLink: {
            type: String
      }
})    

module.exports = mongoose.model('User', UserShema);
