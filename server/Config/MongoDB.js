const mongoose = require ('mongoose');

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connect succussfully ')
    } catch(error){
        console.log('connection fail ')

    }

}
module.exports = connectDB