const mongoose = require("mongoose");

const connectDatabase = (app) => {
    mongoose.connect(`${process.env.MONGO_URL}/${process.env.DATABASE_NAME}`,
        {
            dbName: process.env.DATABASE_NAME || "ocupado-dev"
        }
    )
    .then(() => {
        app.emit("ready");
    })
    .catch((err) => {
        console.error(err);
    });

    const db = mongoose.connection;

    db.on("error", () => {
        console.error.bind(console, "Connection error: ");
    });

    db.once("open", () => {
        console.log("Successfully connected to database!");
    });
};

module.exports = { connectDatabase };