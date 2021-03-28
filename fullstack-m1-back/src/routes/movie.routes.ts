import { routeParamIdMiddleware } from "../common/route-param-id.middleware";

module.exports = app => {
    const movies = require("../controllers/movie.controller");
  
    var router = require("express").Router();
  
    // Create a new Movie
    router.post("/", movies.create);
  
    // Retrieve all Movies
    router.get("/", movies.findAll);
  
    // Retrieve a single Movie with id
    router.get("/:_id", routeParamIdMiddleware, movies.findOne);
  
    // Update a Movie with id
    router.put("/:_id", routeParamIdMiddleware, movies.update);
  
    // Delete a Movie with id
    router.delete("/:_id", routeParamIdMiddleware, movies.delete);

    app.use('/api/movies', router);
  };