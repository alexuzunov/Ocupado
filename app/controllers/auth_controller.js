const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const rounds = 10;

const User = require('../models/user');

exports.register = async (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const matchUser = await User.findOne({ email: email });

    if (matchUser) {
        res.json({ error: "The specified email is already in use!" });
        return;
    }

    if (password !== confirmPassword) {
        res.json({ error: "Passwords do not match!" });
        return;
    }

    const hash = await bcrypt.hash(password, rounds);
    
    if (hash) {
        const user = new User({ firstName: firstName, lastName: lastName, email: email, password: hash });
        
        const result = await user.save();

        if (result) {
            const accessToken = await jwt.sign({ id: result._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4h' });
        
            res.status(201).json({ accessToken: accessToken, user: result });
            return;
        }
            
        next(500, "Could not register user!");
    }

    next(500, "Unsuccessful hash!");
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });
    
    if (user) {
        const result = await bcrypt.compare(password, user.password);

        if (result) {
            const accessToken = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '4h' });

            res.status(200).json({ accessToken: accessToken, user: user });
            return;
        }
    }
    
    res.json({ error: 'There is no user with the specified email and/or password!' });
};