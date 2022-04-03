// Add your code here
var mongoose = require("mongoose");

const data = require("../Data/courses.json");

var mongoDB = "mongodb://127.0.0.1:27017/basic-mern-app";

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String,
  author: String,
  overview:String,
  free: Boolean,
  img: String,
});

var CourseModel = mongoose.model("CourseModel", CourseSchema);

module.exports.connectToDatabase = (callback) => {
  mongoose.connect(
    mongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      callback(err);
    }
  );
};

module.exports.InsertCourses = async () => {
  
  CourseModel.insertMany(data, (err, id) => {
    if (!err) console.log("Course Inserted Successfully with id: " + id);
    else console.log("Error on Inserting Course: " + err);
  });

};

module.exports.RetrieveCourses = async () => {
  results = await CourseModel.find();
  return results;
};
