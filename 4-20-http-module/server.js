// how to create web server by using http module in node js

// const http = require("http");
// let server = http.createServer((req, res) => {
//     //header
//     res.writeHead(200,{"content-type": "text/html"});

//     //body

//     res.end("<h1> hello nodejs </h1>")
// })

// //listen port
// server.listen(8888, err => {
//     if(err) throw err;
//     console.log("my app is running on port number"+8888);
// })

//below code same as above but it is code is less
// let {createServer} = require("http");
// createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/html"});
//     res.end(`<h1>hello nodejs how are you?</h1>`)
// }).listen(5000, () => console.log("server is running in port number"+5000) )

// create some static API from nodejs

let http = require("http");
let server = http.createServer((req, res) => {
  //set header
  res.writeHead(200, {"content-type": "application/json"});
  let empployees = [
    {emp_id: 1, emp_name: "dinesh", emp_sal: 20000, emp_job: "html developer"},
    {emp_id: 2, emp_name: "ramesh", emp_sal: 30000, emp_job: "js developer"},
    {emp_id: 3, emp_name: "ganesh", emp_sal: 40000, emp_job: " developer"},
  ];
  res.end(JSON.stringify(empployees));
});

let port = 5000;

server.listen(port, (err) => {
  if (err) throw err;
  console.log("this is a node js  static API running on port no" + port);
});
