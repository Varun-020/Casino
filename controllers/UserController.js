const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const db = require("../models/index")

const User = db.user

module.exports.createUserValidations = [
    body('username').not().isEmpty().trim().withMessage('Username is required'),
    body('name').not().isEmpty().trim().withMessage('Name is required'),
    body('opening_balance').not().isEmpty().trim().withMessage('Minimum opening balance is 100'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be 8 characters long'),
];

module.exports.loginUserValidations = [
    body('username').not().isEmpty().trim().withMessage('Username is required'),
    body('password').not().isEmpty().trim().withMessage('Password is required'),
];

module.exports.userLogin = async (req, res) => {
    let { username, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        var user = await User.findOne({
            where: {
                username
            }
        });

        if (user) {
            const matched = await bcrypt.compare(password, user.password);
            if (matched) {
                user = await user.update({
                    logged_in: 'yes'
                })
                const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '7d' });
                return res.json({ msg: "Login Successful", token });
            } else {
                return res.status(400).json({ errors: [{ msg: "Password is not correct" }] });
            }
        } else {
            return res.status(404).json({ errors: [{ msg: "User not found" }] });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ errors: error });
    }
};

module.exports.createUser = async (req, res) => {
    let { username, name, opening_balance, password, confirm_password, id } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    if (password !== confirm_password) {
        return res.status(400).json({ errors: [{ msg: 'Password & Confirm Password didn\'t matched' }] });
    }
    if (opening_balance <= 100) {
        return res.status(400).json({ errors: [{ msg: 'Minimum Opening balance is 100' }] });
    }
    try {
        const checkUser = await User.findOne({
            where: {
                username
            }
        });
        if (checkUser) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Username is already taken' }] });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({
                username,
                name,
                balance: opening_balance,
                password: hash,
                userType: 'user',
                createdById: id
            });
            return res
                .status(200)
                .json({ msg: 'User created successffully!' });
        } catch (error) {
            return res.status(500).json({ errors: error });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ errors: error });
    }
};

module.exports.userLogout = async (req, res) => {
    let { username } = req.body;
    try {
        let user = await User.findOne({
            where: {
                username
            }
        })

        user = await user.update({
            logged_in: 'no'
        });

        return res.json({ msg: "Logout Successful" });

    } catch (error) {
        console.log("logout error", error)
        return res.status(500).json({ errors: error });
    }
}