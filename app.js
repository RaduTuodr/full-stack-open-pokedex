import express from 'express'
const app = express()

// get the port from env variable
const PORT = 8080

app.use(express.static('dist'))

app.get('/version', (req, res) => {
    res.send('1')
})

app.get('/health', (req, res) => {
    res.send('ok')
})

app.listen(PORT)
