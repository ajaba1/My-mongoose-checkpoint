import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
// Connect to MongoDb

// a function to connect to the database
async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://ajabafrancis:Rs3M4opRwupJYx1q@cluster0.czdnofv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to the database");
  } catch (error) {
    console.log(error);
  }
}

// creatin a schema
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: Number,
  birthDate: Number,
});

// create a model
const Contact = mongoose.model("Contsct", contactSchema);

// define the route
app.get("/", (req, res) => {
  res.send("hello world");
});

// call the function to connect to the database
connectToDB();
// start server
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
