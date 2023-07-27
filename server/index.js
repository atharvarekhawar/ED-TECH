const express = require('express');
const app = express();

require('dotenv').config();

//importing routes
const userRoutes = require('./routes/user');
const paymentRoutes = require('./routes/payments');
const profileRoutes = require('./routes/profile');
const courseRoutes = require('./routes/course');

const {dbConnect} = require('./config/database');
const {cloudinaryConnect} = require('./config/cloudinary');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');


dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,  
}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}));

cloudinaryConnect();

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);


app.get('/',(req,res)=>{
    return res.json({
        success:true,
        message:"server is running and up ...."
    })
});


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})