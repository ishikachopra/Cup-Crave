// index.js
const express = require('express');
// const { connectToMongoDB } = require("./connect");
// const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const connectDB = require('./middlewares/db');
const ReviewRouter =require("./routes/reviews");
const cakeRoute = require('./routes/cakes');
const { handleGetCakes} = require('./controllers/cakes');
const cookieRoute = require('./routes/cookies');
const {handleGetCookies} = require('./controllers/cookies');
const coffeeRoute = require('./routes/coffee');
const {handleGetCoffee} = require('./controllers/coffee');
const userRoute = require('./routes/user');
const adminRoute=require('./routes/admin');
const checkoutRoute = require('./routes/checkout');
const { authenticate, verifyAdmin } = require('./middlewares/tokenAuthenticate');
const { HandleGetHistory } = require('./controllers/orders');
const { handleLogout } = require('./controllers/logout');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// connectToMongoDB();

app.use(cors({
    origin: 'http://localhost:3001', // Update with your frontend's origin
    credentials: true, // Allow cookies to be sent
}));

app.use(express.json());       //to parse req.body
app.use(express.urlencoded({ extended: false }));    // to parse form data
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));


app.get('/CupnCrave/Menu/cake', handleGetCakes, (req, res) => {
    res.json({ message: 'Success'});
});
app.get('/CupnCrave/Menu/cookie', handleGetCookies, (req, res) => {
    res.json({ message: 'Success' });
});
app.get('/CupnCrave/Menu/coffee', handleGetCoffee, (req, res) => {
    res.json({ message: 'Success'});
});
app.use('/CupnCrave', userRoute);
app.use('/CupnCrave/orders', authenticate, HandleGetHistory);

app.use('/CupnCrave/reviews',ReviewRouter);

// app.get('/CupnCrave/Checkout', authenticate, (req, res) => {
//     res.json({ message: 'This is protected data', user: req.user });
// });

app.use('/CupnCrave/Checkout', checkoutRoute);

app.get('/CupnCrave/profile-display', authenticate, (req, res) => {
    res.json({ message: 'This is protected data', user: req.user });
});

app.get('/CupnCrave/logout', handleLogout);

app.use('/CupnCrave/admin',adminRoute);
app.use('/CupnCrave/admin/cake', verifyAdmin, cakeRoute);
app.use('/CupnCrave/admin/coffee', verifyAdmin, coffeeRoute);
app.use('/CupnCrave/admin/cookie', verifyAdmin, cookieRoute);
app.get('/CupnCrave/admin',verifyAdmin,(req,res)=>{
    res.json({ message: 'This is protected data', user: req.user });
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(port, () => {
    console.log('Server started')
})
