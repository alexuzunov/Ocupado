const { connectDatabase } = require('./app/config/mongoose');

require("dotenv").config();

const express = require("express");

const app = express();

app.on("ready", () => {
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log(`App listening on port ${port}...`));
});

connectDatabase(app);