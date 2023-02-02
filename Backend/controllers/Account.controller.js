const { Account } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SignUp = async (req, res) => {
    const { Username, Password, Role, PhoneNumber, Address } = req.body;
    try {
        if (Username && Password && Role) {
            const checkUsername = await Account.findOne({ where: { Username } });
            if (checkUsername) {
                res.status(403).send("Account is exists")
            } else {
                const newAccount = await Account.create({ Username, Password, Role, PhoneNumber, Address });
                if (newAccount) {
                    res.status(201).send(newAccount)
                } else {
                    res.status(403).send("SignUp is not fail")
                }
            }
        } else {
            res.status(403).send("Username && Password && Role is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



const SignIn = async (req, res) => {
    const { Username, Password } = req.body
    try {
        const accountSignIn = await Account.findOne({ where: { Username } });
        if (accountSignIn) {
            if (accountSignIn.Password === Password) {
                res.status(200).send({
                    message: "Login is success",
                    account: accountSignIn
                })
            } else { // Password sai
                res.status(200).send("Password is error")
            }

        } else {
            res.status(403).send("Account is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


const UpdateAccount = async (req, res) => {
    const { Password, Role, PhoneNumber, Address } = req.body;
    const { id } = req.params;
    try {
        const accountUpdate = await Account.findOne({ where: { id } });
        if (accountUpdate) {
            if (Password && Role && PhoneNumber, Address) {
                accountUpdate.Password = Password;
                accountUpdate.Role = Role;
                accountUpdate.PhoneNumber = PhoneNumber;
                accountUpdate.Address = Address;
                await accountUpdate.save();
                res.status(200).send(accountUpdate)
            } else {
                res.status(403).send("Data is not enough")
            }
        } else {
            res.status(403).send("Account is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

//tim kiem theo ten 
const AllAccount = async (req, res) => {
    const { Username } = req.query;
    try {
        if (Username) {
            const lstAccount = await Account.findAll({
                where: {
                    IsActive: true,
                    Username: {
                        [Op.like]: `%${Username}%`
                    }
                }
            })
            res.status(200).send(lstAccount)
        } else {
            const listAccount = await Account.findAll({ where: { IsActive: true } });
            res.status(200).send(listAccount)
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

const DetailAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const detailAccount = await Account.findOne({ where: { id, IsActive: true } })
        if (detailAccount) {
            res.status(200).send(detailAccount)
        } else {
            res.status(404).send("Account is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const DeleteAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const detailAccount = await Account.findOne({ where: { id, IsActive: true } })
        if (detailAccount) {
            detailAccount.IsActive = false;
            await detailAccount.save();
            res.status(200).send(detailAccount)
        } else {
            res.status(404).send("Account is not exists")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    SignUp,
    SignIn,
    UpdateAccount,
    AllAccount,
    DetailAccount,
    DeleteAccount
}