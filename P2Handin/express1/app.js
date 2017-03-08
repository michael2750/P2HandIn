const express = require("express");
const app = express();

app.use(function(req, res, next){
    //check user
    req.status = "SuperUser";
    next();
})

app.use(function(req, res, next){
    console.log("Time: ", Date.now() + " Log all request")
    next();
})

app.get("/", (req, res) => {
    const status = req.status;
    if(status === "LosyUser"){
        res.send("Go away");
    }
    res.send("Hello Hello Hello " + status);
})

app.get("/maybe", (req, res) => {
    res.send("I maybe hate mondays");
})

app.listen(3333, () => console.log("server stated"));