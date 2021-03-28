import { IMovie } from '../models/movie.model';
import db from "../models/index";
const Movie:any = db.movie;

// Create and Save a new Movie
exports.create = async (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const movie: IMovie = new Movie({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    year : req.body.year
  });

  // Save Movie in the database

  await movie.save()
  .then(data => {
    console.log(res.status)
    res.send({data, message: "New Movie created successfully"});
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Movie state."
    });
  });;
};

// Retrieve all Movies from the database.
exports.findAll = async (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    const movies:Array<IMovie> = await Movie.find(condition)
      .then(data => {
        res.send({data, message: "All Movies Loaded Successfully"});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
  };

// Find a single Movie with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
  
    const movie:IMovie = await Movie.findOne(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Movie with id " + id });
        else res.send({data, message:"Movie with id " + data._id + " loaded successfully"});
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Movie with id=" + id });
      });
  };

// Update a Movie by the id in the request
exports.update = async (req, res) => {    
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params._id;
  
    const movie:IMovie = await Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found!`
          });
        } else res.send({ message: "Movie was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };

// Delete a Movie with the specified id in the request
exports.delete = async (req, res) => {
    const id = req.params._id;
  
    const movie:IMovie = await Movie.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        } else {
          res.send({
            message: "Movie was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };