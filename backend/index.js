const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors())
app.use(express.json())

const secret = 'secret'
const contentType = 'application/json'

app.get('/api', (req, res)=>{
    axios.get(`https://hk-test-api.herokuapp.com/albums/`, {
        headers: {
          accept: contentType,
          'X-API-Key': secret
        }
      })
      .then(response => {
        res.send(response.data)
      })
      .catch(e => {
        console.log('error:', e)
      });
  })

  app.delete('/api', (req, res)=>{
    const id = req.query.id
    axios.delete(`https://hk-test-api.herokuapp.com/albums/${id}`, {
        headers: {
          'X-API-Key': secret
        }
      })
      .then(response=>{
        res.send(response.data)
      })
      .catch(e => {
        console.log('error:', e)
      });
  })

  app.put('/api', (req, res)=>{
    const id = req.query.id
    axios.put(`https://hk-test-api.herokuapp.com/albums/${id}`, req.body, {
        headers: {
            'Content-Type': contentType,
            'X-API-Key': secret
        }
      })
      .then(response=>{
        res.send(response.data)
      })
      .catch(e => {
        console.log('error:', e)
      });
  })


app.listen(5000);