import express from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();

// logs info about request
app.use(morgan('tiny'));
// convert JSON to JS object in POST, PUT, PATH requests
app.use(express.json());
// convert formta to JS object in POST, PUT, PATH requests
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => (data += chunk.toString()));
//         req.on('end', () => {
//             const parseFormData = qs.parse(data);
//             req.body = parseFormData;
//             next();
//         });
//     } else {
//         next();
//     }
// });

app.use((req, res) => {
    console.log(req.body);
    res.send('This is express server!');
});

app.listen(3000, () => console.log('Server is listening at port 3000'));
