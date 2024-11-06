import express from 'express'
import bodyParser from 'body-parser'
import Queue from './queue.js'

const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const queue = new Queue()

app.post('/publish/:channel', (req, res) => {
    const channel = req.params.channel
    const body = req.body
    queue.publish(channel, body)
    res.sendStatus(200)
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
