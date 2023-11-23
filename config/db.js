import mongoose from 'mongoose';
import colors from 'colors';


const connectDB =async()=>{
    try {
        
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`.bgGreen.white);

    } catch (error) {
        console.log(`errors in mongo ${error}`.bgRed.white)
        
    }
};
export default connectDB;