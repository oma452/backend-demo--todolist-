const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body) ;
    await task.save();
    res.status(200).json({message: 'added successfully' , task});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const dataToUpdate = req.body;
  
      // Update the task and return the new updated document
      const updatedTask = await Task.findByIdAndUpdate(id, dataToUpdate, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Use updatedTask instead of task
      res.status(200).json({ message: 'Updated successfully', task: updatedTask });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  

       await Task.findByIdAndDelete(id);
  
     
  
     
      res.status(200).json({ message: 'deleted successfully'});
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

module.exports = router;
