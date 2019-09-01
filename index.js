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

fetch(API_URL + "movies")
    .then(response => {
        if(!response.ok) {
            throw Error("Unsuccessful response");
        }
        return response.json()
    .then(films => {
        const filmTitles = films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(film => `${film.episode_id}. ${film.title}`)
            .join("\n");
        console.log(filmTitles);
    });
    })
    .catch(error => {
        console.warn(error);
    });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
