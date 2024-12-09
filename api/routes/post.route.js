import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("wataaaa");
});
export default router;
// import express from "express";
// const router = express.Router();

// // Define the root route
// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to the Posts API");
// });

// // Define a specific route
// router.get("/hi", (req, res) => {
//   res.status(200).send("this is /hi!");
// });

// export default router;

// // app.use("/api/auth/register", (req, res) => res.send("it works"));
// // app.use("/api/auth/login", (req, res) => res.send("it works"));
// // app.use("/api/auth/logout", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts/", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts/1212", (req, res) => res.send("it works"));
