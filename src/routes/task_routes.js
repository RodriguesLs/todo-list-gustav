const express = require('express');
const router = express.Router();
const { task } = require('../models');
const appController = require("../controllers/applicationController")

router.get('/tasks', (req, res) => {
  appController.all(res)
});

router.get('/tasks/:id', (req, res) => {
  task.findByPk(req.params.id).then(t => {
    res.status(200).send({ task: t });
  });
});

router.post('/tasks', async (req, res) => {
  const { name, author } = req.body;

  const newTask = await task.create({ name, author });

  res.status(201).send({ message: 'New task added', task: newTask });
});

router.put('/tasks/:id', async (req, res) => {
  await task.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  
  task.findByPk(req.params.id).then(t => {
    res.status(200).send(
      {
        task: {
          name: t.name,
          author: t.author
        } 
      }
    );
  });
});

module.exports = router;
