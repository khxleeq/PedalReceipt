const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected: ${con.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(error);
        process.exit(1)  //Uncaught Fatal Exception
    }
}

module.exports = connectDB