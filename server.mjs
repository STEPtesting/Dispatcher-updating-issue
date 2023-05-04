import express from 'express'; // import the Express.js library
import bodyParser from 'body-parser'; // import the body-parser middleware
import xmlparser from 'express-xml-bodyparser'; // import the express-xml-bodyparser middleware
import cors from 'cors'; // import the cors middleware

const app = express(); // create an instance of the Express.js application

app.use(bodyParser.json()); // set up the bodyParser middleware to parse JSON data

app.use(xmlparser({
  limit: '5MB',
})); // set up the express-xml-bodyparser middleware to parse XML data

app.use(cors()); // set up the CORS middleware to allow cross-origin requests
let storage = [] // initialize an empty array to store the parsed data

app.post('/v2x', (req, res) => { // handle POST requests to the '/v2x' endpoint
  storage.push(req.body); // add the parsed data to the storage array
  res.send('OK'); // send a response back to the client
});

app.get('/get',(req,res)=>{ // handle GET requests to the '/get' endpoint
  res.send(storage); // send the storage array back to the client
});

const port = process.env.PORT || 3000; // set the port for the server to listen on
app.listen(port, () => { // start the server
  console.log(`Server listening on port ${port}`); // log a message to the console when the server starts
});
