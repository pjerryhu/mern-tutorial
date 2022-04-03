// Add your code here

const express = require("express");
const app = express();


const {
  InsertCourses,
  connectToDatabase,
  RetrieveCourses,
} = require("./mongoDB.js");

getDataFromMongoDB = async () => {
  results = await RetrieveCourses();
  return results;
};

var cors = require("cors");
app.use(cors());

app.get("/findAllCourses", async (req, res) => {
  //res.json(data);
  results = await getDataFromMongoDB();
  console.log("Sending: " + results);
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.send(results);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  connectToDatabase((err) => {
    if (!err) {
      console.log("Succesfully Connected to the Database");
      //RetrieveCourses();
      InsertCourses();
    } else console.log("Error in connection to the Database");
  });
});
