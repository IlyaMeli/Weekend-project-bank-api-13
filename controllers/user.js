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
  const userName = req.body.userName;
  const cash = req.body.cash;
  const credit = req.body.credit;
  const user = new UserModel({ userName, cash, credit });
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
const depositToUser = async (req, res) => {
    const userId = req.body.userId;
    const conditions = {
        _id : userId
    }


}
module.exports = { getAllUsers, addUser ,depositToUser};
