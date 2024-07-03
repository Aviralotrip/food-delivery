import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config'
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
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
app.use('/api/food', foodRouter);
app.use("/images",express.static('uploads'));
app.use('/api/user',userRouter);
app.use("/api/cart", cartRouter);




app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
