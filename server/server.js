const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/MongoDB');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', require('./routes/ProductRoutes'));
app.use('/api/store', require('./routes/StoreProductRoutes'));
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/order', require('./routes/OrderRoutes'));

app.get('/', (req, res) => {
    res.send('hellow world')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
