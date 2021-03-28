import { ICharacter } from '../models/character.model';
import db from "../models/index";
const Character:any = db.character;

// Create and Save a new Character
exports.create = async (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const character: ICharacter = new Character({
    firstName: req.body.firstName,
    lastName : req.body.lastName,
    birthYear: req.body.birthYear
  });

  // Save Character in the database

  await character.save()
  .then(data => {
    res.status(201);
    res.json({data,  message: "Character was created successfully." });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Character state."
    });
  });;
};

// Retrieve all Characters from the database.
exports.findAll = async (req, res) => {
    const firstname = req.query.firstName;
    console.log(firstname)
    var condition = firstname ? { firstName: { $regex: new RegExp(firstname), $options: "i" } } : {};
  
    const characters:Array<ICharacter> = await Character.find(condition)
      .then(data => {
        res.send({data, message: "All Characters has been Loaded"});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving characters."
        });
      });
  };

// Find a single Character with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
  
    const character:ICharacter = await Character.findOne(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Character with id " + id });
        else res.send({data, message: "Character with id " + data._id +" has been loaded"});
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Character with id=" + id });
      });
  };

// Update a Character by the id in the request
exports.update = async (req, res) => {    
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params._id;
  
    const character:ICharacter = await Character.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Character with id=${id}. Maybe Character was not found!`
          });
        } else res.send({ message: "Character was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Character with id=" + id
        });
      });
  };

// Delete a Character with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params._id;
  
    const character:ICharacter = await Character.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Character with id=${id}. Maybe Character was not found!`
          });
        } else {
          res.send({
            message: "Character was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Character with id=" + id
        });
      });
  };