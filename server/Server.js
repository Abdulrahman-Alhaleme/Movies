

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Server = express();
const port = 3500; 
Server.use(express.json());
Server.use(cors());

const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '2649cd61e3msh5f08581d40a2ae8p111372jsnf77c03af02b9',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};


Server.get("/data", (req, res) => {
    axios.request(options)
        .then((resp) => {
            res.json(resp.data);
        })

});


Server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


