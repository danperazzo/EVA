import mongoose from 'mongoose';

class Database {
  uri:string ;
  constructor() {
    this.uri = process.env.MONGO_URL || "mongodb://localhost:27017";
    mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();