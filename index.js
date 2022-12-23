import express from "express";
import userRoute from "./app/user/route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).send("Home");
});

app.use(userRoute);

app.listen(3003, () => {
  console.log("App is listening on 3003");
});
