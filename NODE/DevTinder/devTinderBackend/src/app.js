const express = require('express');
/*👉 This line imports the Express module using require.
 You must have installed it earlier using npm install express. 
 Express is a minimal and flexible Node.js web application framework.*/

const app = express();
/*👉 This line creates an instance of an Express application.
You’ll use this app object to define routes, middleware, and server behavior.*/

app.use("/test",(req,res)=>{
    res.send("Hello form the server");
})// this function is known as request handler

app.use("/hello",(req,res)=>{
    res.send("Hello Mukesh How are you!!!!!!!!!!!!!!!!");
})

app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000....")
});
/*👉 This line starts the server and tells it to listen for incoming requests on port 3000. 
Once this runs, your server is live and ready to handle requests at http://localhost:3000.*/ 

