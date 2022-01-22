const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const PASSWORD = process.env.PASSWORD;

mongoose.connect(
  `mongodb+srv://bankuser2022:${PASSWORD}@bank-cluster.o6tae.mongodb.net/bank-api?retryWrites=true&w=majority`
);
