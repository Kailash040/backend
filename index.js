console.log("hello ji");
import express from "express";
import path from "path";
// ejs npm  i ejs
// 400 bad request, 404 Not found , 200 ok, 500 internal server error
// send , json ,setheader ,header,statusCode ,sendstatus it,s a express method ,path, set
const app = express();
app.set("view engine", "ejs")
app.get("/", (req, res) => {
  // const pathlocation = path.resolve();
// res.sendFile(path.join(pathlocation, "./index.html"));
res.render("index", {name :"Abhishek"})
});

//

//
app.listen(5000, () => {
  console.log("server started");
});
