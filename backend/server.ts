import express from "express";
const app = express();
import { fakeData } from './fakeDb'
const PORT = 1337











app.get('/hello', (req, res) => {
    console.log('GET /hello - req recieved by server')
    res.send('hello world')
})

app.get('/bookings', (req, res) => {
    console.log('THIS IS BOOKINGS')
    res.send(fakeData)
})

app.listen(PORT, ()=> {
    console.log(`Severn lyssnar på port  ${PORT}`)
})