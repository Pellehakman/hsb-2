import express from "express";
const app = express();
// k
const PORT = process.env.PORT || 4444;
import credentialsRoute from "./routes/credentials.js";

//Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.httpVersion);
  next();
});



app.use("/api/credentials", credentialsRoute);

// app.get('/hello', (req, res) => {
//     console.log('GET /hello - req recieved by server')
//     res.send('hello world')
// })

// app.get('/bookings', (req, res) => {
//     console.log('THIS IS BOOKINGS')
//     res.send(data)
// })

app.listen(PORT, ()=> {
    console.log(`Severn lyssnar på port ${PORT}`)
})