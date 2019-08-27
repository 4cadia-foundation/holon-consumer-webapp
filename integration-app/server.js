const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    methods: "GET,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./src/controllers/integration/integration.controller')(app);

app.listen(8080, () => {
    console.log(`application start in port 8080`);
});
