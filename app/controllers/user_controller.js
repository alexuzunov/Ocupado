const User = require('../models/user');

exports.get_all = function (req, res, next) {
    User.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
};

exports.get_one = function (req, res, next) {
    User.findById(req.params.id)
        .populate(['facilities', 'reservations'])
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
};

exports.put_one = async function (req, res, next) {
    const id = req.params.id;

    const oldUser = await User.findById(id).catch((err) => {
        res.status(500).json(err.message);
    });
  
    if (!oldUser) {
        res.status(404).json('There is no user with the specified id!');
    }

    User.findByIdAndUpdate(id, req.body, { new: true })
        .then((user) => {
            if (!user) {
                res.status(404).json('There is no user with the specified id!');
            }

            res.status(200).json({ user: user });
        })
        .catch((err) => {
            res.status(400).json(err.message);
    });
};

exports.delete_one = function (req, res, next) {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({ message: 'Successfuly deleted!' });
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
};