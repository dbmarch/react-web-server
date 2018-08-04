import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const DEBUG = process.env.NODE_ENV !== "production";
const PORT = DEBUG ? "3000" : process.env.PORT;

app.use(express.static(__dirname + "/../../public"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  console.log("/api/hello");
  const message = { text: "Hello from Express" };
  //res.json(message);
  //res.send("Hello from Express");
  res.status(200).send({ express: "Hello from Express!" });
});

const server = app.listen(PORT, function() {
  console.log("Express listening on port %s", PORT);
});
