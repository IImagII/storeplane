const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const planesRoute = require('./routes/planes')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

//Для парсинга передачи данных от клиента к серверу
app.use(express.json())
app.use(
   express.urlencoded({
      extended: true,
   })
)

//Для комфортного логирования сервера
app.use(morgan('dev'))
app.use(cors())

//Путь к папке с картинками
app.use('/static', express.static(__dirname + '/assets'))

//Тестовый запрос для проверки
app.get('/', (req, res) => {
   res.send('Hello World')
})

//Подключение роутов
app.use('/api/planes', planesRoute)

//подключение к базе данных и авто запуск сервера
mongoose
   .connect('mongodb://localhost:27017')
   .then(() => {
      app.listen(port, () => {
         console.log(`MongoDb connect and server run ${port}`)
      })
   })
   .catch(error => console.log(error))
