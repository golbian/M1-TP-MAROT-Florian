import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './common/error/error.middleware';
import { logMiddleware } from './common/log.middleware';

export const app = express();
const db = require("./models");
db.mongoose
  .connect("mongodb://localhost:27017/full_stack", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  var corsOptions = {
    origin: "http://localhost:4200"
  };
app.use(cors(corsOptions));
app.use(logMiddleware);
app.use(express.json());
require("./routes/character.routes")(app);
require("./routes/movie.routes")(app);
app.use(errorMiddleware);
