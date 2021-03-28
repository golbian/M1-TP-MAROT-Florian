const mongoose:any = require("mongoose");

mongoose.set('debug', true);

mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose,
    url: process.env.DB,
    character:require("./character.model")(mongoose),
    movie: require("./movie.model")(mongoose),
    user: require("./user.model")(mongoose)

};
export = db;