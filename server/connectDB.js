import mongoose from 'mongoose';

const connectDb = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected to mongoDb"))
    .catch(err => console.log("MongoDB Err : ",err))
}

export default connectDb;