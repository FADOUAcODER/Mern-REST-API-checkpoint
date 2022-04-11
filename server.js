const express = require ('express');
const app=express();
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config();
//connecting to database
const connectDB= require('./helpers/connectDB');
const { use } = require('./routes/userRoutes');
connectDB();

//  routes///
app.use('/api/user', require('./routes/userRoutes'))


const PORT=process.env.PORT
app.listen(PORT,(err)=>err?console.log(err): console.log(`server is running on port ${PORT}`));