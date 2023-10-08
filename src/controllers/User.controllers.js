const catchError = require("../utils/catchError");
const user = require("../model/user");

const getAllUsers = catchError(async (req, res) => {
  const users = await user.findAll();
  return res.json(users);
});

const createUser = catchError(async (req, res) => {
  const { first_Name, last_Name, email, password, birthday } = req.body;
  const newUser = await user.create({
    first_Name,
    last_Name,
    email,
    password,
    birthday,
  });
  return res.json(newUser).status(201);
});

const getUser = catchError(async (req, res) => {
  const { id } = req.params;
  const userId = await user.findByPk(id);
  return res.json(userId);
});

const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  const userIdDelete = await user.destroy({ where: { id } });
  return res.sendStatus(204);
});

const updateUser = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_Name, last_Name, email, password, birthday } = req.body;
  const userIdDelete = await user.update(
    { first_Name, last_Name, email, password, birthday },
    { where: { id }, returning: true }
  );
  return res.json(userIdDelete[1][0]);
});

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
