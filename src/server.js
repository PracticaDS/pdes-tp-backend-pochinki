import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import api from './routes/api'
import apiGames from './routes/saved_games'


const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use((req, res, next) => {
//   setTimeout(next, 500);
// })

app.use('/api', api)
app.use('/api', apiGames)

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

export default app
