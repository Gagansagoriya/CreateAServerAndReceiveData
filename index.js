// import http from "http";
// import fs from "fs";

// const server = http.createServer((req, res) => {
//   // Create a post method
//   if (req.method === 'POST') {

//     let reqBody = "";

//     // Chunk the data
//     req.on('data', (chunk) => {
//       reqBody += chunk.toString();
//     });

//     req.on('end', () => {
//       // Append the request body to the "data.txt" file

//       fs.appendFileSync('data.txt',reqBody);

//       // Read the contents of the "data.txt" file
//       const fileContent = fs.readFileSync('data.txt', 'utf-8');

//       // Log the contents of the file to the console
//       console.log(fileContent);
//     });
//     // Send a response to the client
//      res.end('data received');
//   } 
//   else {
//     res.statusCode = 405;
//     res.end('Method not allowed');
//   }

  
// });


import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res) =>{

  // First we create a post if condition 

  if(req.method === 'POST'){

    // Create a reqbody

    let reqbody = "";

    req.on('data' , (chunk) =>{
      reqbody += chunk.toString();
    });

    // Then we are resolving the append function 

    req.on('end' ,() =>{

      // Append the file to the destination 

      fs.appendFileSync('data.txt' ,reqbody);

      const fileData = fs.readFileSync('data.txt' , 'utf-8');
      
      // Then we are printing the data to the console

      console.log(fileData);
    });

    res.end('data received')
  }
  else{
    res.statusCode = 404;
    res.end('Method are not find')
  }
});

export default server;
