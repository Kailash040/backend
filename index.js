console.log("hello ji");
import express from "express";
import path from "path";
// 400 bad request, 404 Not found , 200 ok, 500 internal server error
// send , json ,setheader ,header,statusCode ,sendstatus it,s a express method ,path
const app = express();
app.get("/path", (req, res) => {
  const pathlocation = path.resolve();
  res.sendFile(path.join(pathlocation, "./index.html"));
});

//

//
app.listen(5000, () => {
  console.log("server started");
});
