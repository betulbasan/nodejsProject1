const express = require("express"); // import express module
const app = express(); 

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port " + listener.address().port)
})