import express from "express";
const app = express();
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

app.use(express.json());
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.listen(8800, () => {
  console.log("server rsrunning");
});
