const mongoose =require('mongoose');
 
const userSchema =  new mongoose.Schema({
 name:String,
 email:String,
 feedback:String    
},
{ collection: 'fitness' }); //This additional code was added so that mongodb does not make new collection called fitnesses.

module.exports = mongoose.model('fitness',userSchema) //here 'fitness' is the name of our collection 