import { model, Document, Model } from 'mongoose';


export interface ICharacter extends Document {
  firstName: string;
  lastName: string;
  birthYear: number;
}

module.exports = mongoose => {
  var Schema = mongoose.Schema({
    firstName: {
      type:String,
      required: true
    },
    lastName: {
      type:String,
      required: true
    },
    birthYear: {
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
  const Character: Model<ICharacter> = model('Character', Schema);
  return Character;
};

