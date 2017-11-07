
import express from 'express';
let app = express();
import bodyParser from 'body-parser';
import DBinsert from './dal/dbinsert';
import DBquery from './dal/dbquery';
import myRoutes from './routes/router';
     
 
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/views/insert`));

app.use('/', myRoutes);

app.get('/hello', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`App is running on port ${process.env.PORT}`);
}) 