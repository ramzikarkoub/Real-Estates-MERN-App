import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //   Hash Passwod
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // create a user and save it to the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "user created successufully" });
  } catch (err) {
    console.log(Error);
    res.status(500).json({ message: "failed to create user" });
  }
};

export const login = async (req, res) => {};

export const logout = (req, res) => {
  console.log("logout");
};
