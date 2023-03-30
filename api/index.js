import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './src/routes/indexRoutes.js'
dotenv.config();
const port = process.env.PORT
const app = express()
mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.DB_MONGO
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(express.json())
app.use(express.urlencoded())


app.use('/' , router)


app.listen(port, ()=>{
 console.log(`listening on port: ${port}`)
})