const express = require('express');
const { Number, String } = require('../model');

const router = express.Router();

router.get('/numbers', async (req, res) => {
    try {
        const numbers = await Number.find();
        res.status(200).send(numbers);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/numbers', async (req, res) => {
    try {
        const number = new Number({ no: req.body.no });
        await number.save();
        res.status(201).send(number);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/strings', async (req, res) => {
    try {
        const string = new String({ string: req.body.string });
        await string.save();
        res.status(201).send(string);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/strings', async (req, res) => {
    try {
        const strings = await String.find();
        res.status(200).send(strings);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;    