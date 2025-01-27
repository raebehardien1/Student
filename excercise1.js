

import express from 'express'
//initializian by creating the project
const app = express ()
const PORT = process.env.PORT || 4000
//responsible fro your prject to be a API
app.listen(PORT,() =>{
console.log('http://localhost:'+PORT);
console.log('server is running perfectly');
}) 

//returms information
app.get("/" , (req , res) => {
    res.json({messsage:"This is Excercise 1}"}); //the .json send it back as json data
}) 
app.get("/api" , (req , res) => { //different method /api
   res.json({messsage:"Hello Raeesa}"});
}) 
app.post("/api" , (req , res) => { //
   res.json({messsage:"You are great!}"}); //
}) 