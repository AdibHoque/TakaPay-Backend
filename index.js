require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.knvnnno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/", (req, res) => {
  res.send("API server is running for TakaPay!")
})

app.listen(port, () => {
  console.log("Listening to Port: ", port)
})