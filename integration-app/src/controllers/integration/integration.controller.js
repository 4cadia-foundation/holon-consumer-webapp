const IntegrationService = require ('../../service/integration.service');

const express = require('express');
const router = express.Router();
const service = new IntegrationService();


router.post('/integrate', async (req, res) => {
    try {
        if (!req.body.address)
            return res.status(400).send({error: 'address is not defined', status: 400});

        const address = req.body.address;
        const transactions = await service.transaction(address);

        return res.status(200).send({...transactions});

    }catch (exception) {
        console.error("[integration.controller] Error: "+ exception);
        return res.status(500).send(exception);
    }
});


 module.exports = app => app.use('/api', router);
