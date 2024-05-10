import express, { Express } from "express";

const app: Express = express();
const port = 3000;
const addo = 50;
const food = 10;
const result = addo + food;

// app.get("/", (req, res) => {
//   // Send the JSON response with the message containing the result
//   res.json({
//     message: `the sum is ${result}`,
//   });
// });

app.get("/", (req, res) => {
  // Send the plain text response to be displayed in the browser
  res.send(`Result is:  ${result}`);
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
