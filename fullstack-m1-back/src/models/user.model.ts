import { model, Document, Model } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
  }
  
  
  module.exports = mongoose => {
    var Schema = mongoose.Schema({
      email: {
        type:String,
        required: true
      },
      password: {
        type:String,
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
    const User: Model<IUser> = model('User', Schema);
    return User;
  };
  
  