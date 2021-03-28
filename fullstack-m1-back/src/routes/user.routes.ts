// module.exports = app => {
//     const movies = require("../controllers/movie.controller.js");
  
//     var router = require("express").Router();
  
//     // Create a new Grid
//     router.post("/", movies.create);
  
//     // Retrieve all Grids
//     router.get("/", movies.findAll);
  
//     // Retrieve a single Grid with id
//     router.get("/:id", movies.findOne);
  
//     // Update a Grid with id
//     router.put("/:id", movies.update);
  
//     // Delete a Grid with id
//     router.delete("/:id", movies.delete);
  
//     // Create a new Grid
//     router.delete("/", movies.deleteAll);
  
//     app.use('/api/movies', router);
//   };