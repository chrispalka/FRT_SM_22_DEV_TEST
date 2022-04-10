const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  axios('https://randomuser.me/api/?results=9', {
    dataType: 'json'
  })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.get('**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => console.log(`Connected at: http://localhost:${PORT}`));

/*
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});*/
