const { task } = require("../models")

exports.all = res => {
    task.findAll({ order: [ ['id'] ] }).then(tasks => {
        res.status(200).send({ tasks });
    });
}