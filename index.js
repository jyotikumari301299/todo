// setting up the express server

const express = require('express');
const app = express();
const port = 8000;






app.listen(port,(err)=>{
    if(err)
    {
        console.log("error in running the port :",port);
    }
    console.log(`port is up and running: ${port}`);
})