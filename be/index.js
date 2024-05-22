const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port=3000

const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
app.get('/student/',async function (req, res) {
    const elem= await Kitten.find()
  res.send(elem)
})
app.get('/student/:id',async function (req, res) {
    const elem= await Kitten.findById(req.params.id)
  res.send(elem)
})
app.delete('/student/:id',async function (req, res) {
    const elem= await Kitten.findByIdAndDelete(req.params.id)
  res.send(elem)
})
app.post('/student/',async function (req, res) {
    const elem= new Kitten(req.body)
    await elem.save()
  res.send(elem)
})
mongoose.connect('mongodb+srv://meryem:meryem@cluster0.uxlacr1.mongodb.net/')
  .then(() => console.log('Connected!'));


app.listen(port,()=>{
    console.log(`conmect ${port}`)
})