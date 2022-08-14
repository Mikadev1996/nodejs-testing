const mongoose = require("mongoose");

const mongoDb = `mongodb+srv://mika:mika@cluster0.ntegc.mongodb.net/local_library?retryWrites=true&w=majority`;

mongoose.connect(mongoDb, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));