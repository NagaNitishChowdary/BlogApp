const mongoose = require('mongoose') ; 
require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URL,{
    dbName : process.env.DB_NAME
}).then(() => {
        console.log('Successfully Connected to MongoDB');
    }).catch((err) => {
    console.log("Error Connecting to DB " + err);
}); 