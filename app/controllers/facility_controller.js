const Facility = require('../models/facility');

exports.get_all = function (req, res, next) {
    Facility.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
};

exports.create_one = function (req, res, next) {
    const facility = new Facility(req.body);
    facility
        .save()
            .then(async () => {
                res.status(200).json(facility);
            })
            .catch((err) => {
                res.status(400).json(err.message);
            });
};

exports.get_facilities_for_user = function (req, res, next) {
    Facility.find({ creator: req.params.id })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
}