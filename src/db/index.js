const { connect } = require("mongoose");

const uri = "mongodb+srv://kajal:MJEyC8ExaLwxqOxS@cluster0.j2kqi.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)