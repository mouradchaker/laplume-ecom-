import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to DB"));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      res.send({ message: "Email Est Déjà Enregistré", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Bienvenu", alert: true });
    }
  });
});
//api login
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };

      res.send({
        message: "Bienvenu",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "L'e-mail n'est pas disponible, veuillez vous inscrire",
        alert: false,
      });
    }
  });
});
//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);

//save product in data
//api
app.post("/uploadProduct", async (req, res) => {
  const data = await productModel(req.body);
  const datasave = await data.save();

  res.send({ message: "Upload successfully" });
});

//
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});
//connection
app.listen(8080, () => {
  console.log("server started");
});
