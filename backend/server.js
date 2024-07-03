import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config
const app = express();
//PORT
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());


// db connection

connectDB();

//api endpoints
import foodRouter from "./routes/foodRoute.js";
app.use('/api/food', foodRouter);
app.use("/images",express.static('uploads'));


app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
