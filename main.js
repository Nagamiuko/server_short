import express from "express";
import cors from "cors"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import routsSaveHis from "./routes/route.js"

dotenv.config()

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

mongoose.connect( process.env.MONGOBD_API, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
}
).on('error', (error) => {
    console.log(error);
}
);
app.get("/", (req, res) => {
  res.status(201).json({ message: "Hello World" });
});

app.use('/api',routsSaveHis)

app.listen(process.env.PORT || PORT ,()=>{
    console.log(`http://localhost:${PORT}`);
});
