const fs = require("fs");

//!how create directory
//?create folder synchronously
// fs.mkdirSync("jspiders");

//?crate folder asynchronously
//!call back function

//! make directory and write file inside directory asynchronously
// fs.mkdir("webSiders", (err) => {
//   if (err) throw err;
//   console.log(
//     "successfully webspider directory created now you can write file inside folder"
//   );
//   //read file asynchronously
//   fs.readFile("readme.txt", {encoding: "utf-8"}, (err, data) => {
//     //write file async
//     if (err) throw err;
//     fs.writeFile("webSiders/writeMe.txt", data, (err) => {
//       if (err) throw err;
//       console.log("successfully data written inside webspider folder");
//     });
//   });
// });

//?nested directory
// fs.mkdir("src", err => {
//     if (err) throw err;
//     console.log("successfully src folder created");
//     fs.mkdir("src/components", err => {
//         if (err) throw err;
//         console.log("")
//     })
// })

//how to delete file and folder synchronously
// fs.unlinkSync("node.js");

//delete file and folder asyncronously
// fs.unlink("/dinesh.txt", (err) => {
//   if (err) throw err;
//   console.log("successfully file deleted");
// });

//!delete he
