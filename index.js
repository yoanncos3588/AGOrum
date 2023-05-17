const express = require(`express`);
const dotenv = require(`dotenv`);
const path = require(`path`);
const router = require(`./app/router`)

const app = express();

app.set(`view engine`, `ejs`);
app.use(express.static('public/assets'));
const viewsDirectory = path.join(__dirname, 'app/views');
app.set('views', viewsDirectory);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${port}`);
});

