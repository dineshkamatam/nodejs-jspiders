//how to run node js code
//use terminal and run the file like >node filename
// let test = function () {
//   console.log("hello i am nodejs..hello world");
// };

// test();

//nodejs modules
// 1: core modules
// 2 :third party modules
// 3 : local modules

// module is a file

//commonjs modules
//es6 modules

//node js uses commonjs module by default but you can use es6 as well

// let frameworks = require("./backend");
// let designation = "nodejs developer";
// let user = {
//   username: "mani",
//   age: 30,
//   company: "Qspiders",
//   salary: 20000,
//   designation,
// };
// let {username, age, company, salary} = user;
// console.log(username);

// let jspiders = require("./backend");

// let {nodejsframeworks, javaframeworks, pythonframeworks} = require("./backend");

// console.log(nodejsframeworks("express"));
// console.log(javaframeworks("spring"));
// console.log(pythonframeworks("django"));

let {
  JsFrameworks,
  libraries,
  cssFrameworks,
  backendframework,
} = require("./frontend");

console.log(JsFrameworks);
console.log(libraries);
console.log(cssFrameworks);
console.log(backendframework);
