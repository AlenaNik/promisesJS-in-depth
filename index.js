const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const cors = require('cors');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.use(bodyParser.json());
app.use(cors());


const API_URL = "https://starwars.egghead.training/";
const responsePromise = fetch(API_URL + 'films');
responsePromise.then(response => {
    return response.json();
}).then(films => {
    const filmTitles= films.map(film => `${film.episode_id}. ${film.title}`)
        .join("\n");
    console.log(filmTitles);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
