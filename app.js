//develop
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/data', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).send({ error: 'Name and age are required' });
    }
    res.status(201).send({ name, age });
});

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send({ id, name: 'Test User', age: 25 });
});

module.exports = app;
