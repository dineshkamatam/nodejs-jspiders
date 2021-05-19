//core modules  //built in modules
//for core modules no need to install, use import it
/**
 * fs
 * http
 * queryString
 * os
 * path
 * crypto
 * event
 * util
 * buffer
 *
 */

//file system core module
//its support file hanling in os

let fs = require("fs");

//synchronous way //blocking code
//Asynchronous way
//callback or //promises //non blocking way
//todo read file synchronously
// let readme = fs.readFileSync("redme.txt", "utf-8"); //raw data buffer
// console.log(readme); //convert raw data into string

//todo: read file asynchronously **call back or promises
//!should call callback function or promises for asunchronous data
// fs.readFile("redme.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log("i am exicuting first ");

//?write file synchronously
// let writMeText = fs.writeFileSync(
//   "demo.txt",
//   "long-term asdfasdfasdfasd masdfasdf asdf adfasdf asdfas df as df asd f asd fa sd f asd "
// );

// console.log(writMeText);

// let javascript = fs.readFileSync("JavaScript");

//? write file Asynchronously   //recomended
fs.readFile("readme.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("successfully read data next will exact same data => call");
  fs.writeFile("dinesh.txt", data, (err) => {
    if (err) throw err;
    console.log("successfully data written from readme.txt file");
  });
});

//?read file asnchronously
