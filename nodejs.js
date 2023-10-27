// end
// import { number1, number2 } from "./features.js";
// console.log(number1, number2);
// console.log(home);
// console.log(number);
// import number from "./features.js";
// const home = fs.readFileSync("./index.html");
import http from "http";
import fs from "fs";
import os from 'os'
import path from "path";
const server = http.createServer((req, res) => {
   console.log(req.method);
  if (req.url === "/") {
    res.end("home");
  } else if (req.url === "/about"){
    res.end("about");
  }
  else if (req.url === "/contact") {
    res.end("contact");
  } else {
    res.end("page not found");
  }
});
server.listen(5000, () => {
  console.log("server is working");
});