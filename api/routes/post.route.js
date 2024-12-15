import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("wazaaaaup");
});
// router.post("/", (req, res) => {
//   res.status(200).send("wazaaaaup");
// });
// router.put("/", (req, res) => {
//   res.status(200).send("wazaaaaup");
// });
// router.delete("/", (req, res) => {
//   res.status(200).send("wazaaaaup");
// });

export default router;

// // app.use("/api/auth/register", (req, res) => res.send("it works"));
// // app.use("/api/auth/login", (req, res) => res.send("it works"));
// // app.use("/api/auth/logout", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts/", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts", (req, res) => res.send("it works"));
// // app.use("/api/auth/posts/1212", (req, res) => res.send("it works"));
