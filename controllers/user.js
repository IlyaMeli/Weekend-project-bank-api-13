const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error: e.message });
  }
};

const addUser = async (req, res) => {
  const { userId, userName, cash, credit } = req.body;
  const user = new UserModel({ userId, userName, cash, credit });
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
const depositToUser = async (req, res) => {
  const { id, deposit } = req.body;
  try {
    const updatedUser = await UserModel.findById(id);
    updatedUser.cash += deposit;
    const user = await UserModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(404).send("NO SUCH USER..");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = { getAllUsers, addUser, depositToUser };
