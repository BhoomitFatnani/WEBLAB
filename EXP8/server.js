const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB'
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  email: String
});

const Student = mongoose.model('Student', studentSchema);



app.post('/addStudent', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Student added successfully');
  } catch (err) {
    res.send(err);
  }
});



app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});