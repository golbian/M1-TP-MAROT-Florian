import { model, Document, Model } from 'mongoose';


export interface IMovie extends Document {
  title: string;
  date: number;
}

module.exports = mongoose => {
  var Schema = mongoose.Schema({
    title: {
      type:String,
      required: true
    },
    imageUrl: {
      type:String,
      required: true
    },
    year: {
      type:Number,
      required: true
    },
    createdAt: {
      type: Date,
      required: false
   },
   modifiedAt: {
      type: Date,
      required: false
   }
  });
  const Movie: Model<IMovie> = model('Movie', Schema);
  return Movie;
};

