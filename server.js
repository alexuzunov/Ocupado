const { connectDatabase } = require('./app/config/mongoose');
const { router } = require('./app/routes');

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.on("ready", () => {
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => console.log(`App listening on port ${port}...`));
});

connectDatabase(app);