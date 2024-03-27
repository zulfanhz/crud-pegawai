import express  from "express";
import cors from "cors";
import UserRoute from "../routes/UserRoute.js";

const app = express();
app.get("/", (req,res)=> res.send("Express on vercel");)
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));

module.exports = app;