import express from "express";
import postsRoute from "./routes/post.route.js";
const app = express();

app.use("/api/posts", postsRoute);

app.listen(8800, () => {
  console.log("server is running");
});

// import express from "express";
// import postRoute from "./routes/post.route.js";

// const app = express();

// // Middleware to use the router
// app.use("/api/posts", postRoute);

// // Start the server
// app.listen(8800, () => {
//   console.log("server is live");
// });
