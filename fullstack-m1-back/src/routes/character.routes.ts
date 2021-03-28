import { routeParamIdMiddleware } from "../common/route-param-id.middleware";

module.exports = app => {
    const characters = require("../controllers/character.controller");
  
    var router = require("express").Router();
  
    // Create a new Character
    router.post("/", characters.create);
  
    // Retrieve all Characters
    router.get("/", characters.findAll);
  
    // Retrieve a single Character with id
    router.get("/:_id", routeParamIdMiddleware, characters.findOne);
  
    // Update a Character with id
    router.put("/:_id", routeParamIdMiddleware, characters.update);
  
    // Delete a Character with id
    router.delete("/:_id", routeParamIdMiddleware, characters.delete);
  
    app.use('/api/characters', router);
  };