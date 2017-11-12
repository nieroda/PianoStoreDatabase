import express from 'express';
let app = express();
import bodyParser from 'body-parser';
import myRoutes from './routes/router';
import methodOverride from 'method-override';
import cors from 'cors';

const port = process.env.PORT || 3000;
const ip = process.env.IP || '192.168.1.1';


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(`${__dirname}/views/insert`));
app.use(cors());

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', myRoutes);


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
