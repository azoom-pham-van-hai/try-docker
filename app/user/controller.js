import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  console.log(req.path);
  const users = await prisma.users.findMany();
  return res.status(200).send(users);
};

const createUser = async (req, res) => {
  console.log(req.path);
  const { name, age } = req.body;
  const user = await prisma.users.create({
    data: {
      name,
      age: Number(age),
    },
  });
  return res.status(200).send(user);
};

export { getUsers, createUser };
