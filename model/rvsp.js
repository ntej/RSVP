const mongoose = require('mongoose')

const RVSPSchema = new mongoose.Schema({
    firstname:{
       type:String,
       required:[true,'First Name required'],
       trim:true, //trims spaces start and end
       maxlength:[30,'First Name cannot be more than 30 characters']
    },
    lastname:{
        type:String,
        required:[true,'Last Name required'],
        trim:true, 
        maxlength:[30,'Last Name cannot be more than 30 characters']
    },
    email:{
        type:String,
        required:[true,'Email ID required'],
        trim:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ]
    },
    phone:{
        type:String,
        trim:true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'] //RegEx only works with strings
    },
    peoplecount:{
        type:Number,
        default:0,
        validate:{
            validator: function(peoplecount){
                return Number.isInteger(peoplecount) && peoplecount>=0
            },
            message: 'Enter valid people count'
        }
    },
    attending:{
        type:Number,
        default:-1,
        validate:{
            validator: function(attending){
                return Number.isInteger(-1) && attending>=-1 && attending<=1
            },
            message: 'Attendence should be -1/0/1 which corresponds to No/Maybe/Yes  '
        }
    },
})

module.exports = mongoose.model('RVSP',RVSPSchema);