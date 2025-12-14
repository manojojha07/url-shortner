import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();



const ConnectToDb = async() => {
    try {
       await mongoose.connect(process.env.MONGO_URI, {
          //   useNewUrlParser: true,
      // useUnifiedTopology: true,
       });
        console.log("Connected !");
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
         console.log("not Connected !");
        process.exit(1);
    }
}

export default ConnectToDb;
