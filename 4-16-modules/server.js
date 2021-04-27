setTimeout(()=>{
    console.log("i am a async call")
},1000);

let x = "x";
console.log(x);

//example for async call in node js or non blocking i/o

// Node js modules 
//core modules built in modules nodejs no need install

// const http = require("https");
// const fs = require("fs");
// const url = require("url")
// const path = require("path")
// const os = require("os")
// const crypto = require("crypto")
// console.log("https");

//+==============
 const fullstackdata = require("./fullstack");// local Module

 console.log(fullstackdata.MernStack("mongodb","express.js","Reactjs","nodejs"));
 console.log(fullstackdata.MeanStack("mongodb","express.js","Express.js","nodejs"));
 console.log(fullstackdata.JavafullStack("mongodb","express.js","Reactjs","nodejs"));