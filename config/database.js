const mongoose =require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI/*, {
        useNewUtiParser: true,
        userCreateIndex: true,
        useFindAndModify: false,
        useUnifyTopology: true
    }*/);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports =connectDB;