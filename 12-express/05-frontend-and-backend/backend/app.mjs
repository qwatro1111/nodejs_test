import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import qs from 'querystring';

const app = express();

// logs info about request
app.use(morgan('tiny'));
// convert JSON to JS object in POST, PUT, PATH requests
app.use(express.json());
// convert formta to JS object in POST, PUT, PATH requests
app.use(express.urlencoded({ extended: true }));
// enabled ll CORS request
app.use(cors());

app.use((req, res) => {
    const personData = {
        name: 'Tester',
        isTester: true,
    };
    console.log(req.body);
    res.json(personData);
});

app.listen(3001, () => console.log('Server is listening at port 3001'));
