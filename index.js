//
import http from "http";
import  number  from "./features.js";
import fs from 'fs'
import  {number1,number2} from './features.js'
console.log(number1,number2);
const home = fs.readFileSync("./index.html");
console.log(home)
console.log(number);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(home);
  } else if (req.url === "/about") {
    res.end("about");
  }
  if (req.url === "/contact") {
    res.end("contact");
  } else {
    res.end("page not found");
  }
}); 
server.listen(5000, () => {
  console.log("server is working");
});