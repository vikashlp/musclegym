// const express = require('express');
// require('./db/Config');
// const User = require('./db/User');
// const app = express();
// const cors = require('cors');

const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const ap = express();
const app = require('./app');
const dotenv = require("dotenv");

app.use(cors());
app.use(express.json());

app.post("/gymnasium",  async (req,res) => {
    let user = new User(req.body);
    let result =  await user.save();
    res.send(result);
})

dotenv.config({path:"backend/config/config.env"});

ap.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)
}

)


app.listen(5000); 



