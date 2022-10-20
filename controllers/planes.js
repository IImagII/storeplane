const Plane = require('../models/Plane')
const errorHandler = require('../utils/errorHandler')

//Получение из базы данных метод GET
const getPlanes = async (req, res) => {
   try {
      const planes = await Plane.find()
      res.status(200).json(planes)
   } catch (e) {
      errorHandler(res, e)
   }
}

//Получение из дазы данных конкретно по ID

const getIdPlanes = async (req, res) => {
   try {
      const plane = await Plane.find({ _id: req.params.id })
      res.status(200).json(plane)
   } catch (e) {
      errorHandler(res, e)
   }
}

//Метод POST создание и добавление вбазу данных
const createPlanes = async (req, res) => {
   const errors = {}
   if (!req.body.name) {
      errors.name = { message: 'Не указали имя самолета' }
   }
   if (!req.body.price) {
      errors.price = { message: 'Не указали цену самолета' }
   }
   if (!req.body.description) {
      errors.description = { message: 'Не дали описание самолета' }
   }
   if (req.body.description && req.body.description.length > 700) {
      errors.description = { message: 'Слишком большое описание самолета' }
   }
   if (!req.body.capacity) {
      errors.capacity = { message: 'Не указали вместимость самолета' }
   }
   if (!req.body.capacity && req.body.capacity > 2) {
      errors.capacity = { message: 'Слишком большая вместимость' }
   }
   if (!req.file) {
      errors.planeImage = { message: 'Добавте картинку самолета' }
   }
   if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors)
   }
   try {
      const { name, price, description, capacity } = req.body
      const plane = await Plane.create({
         name,
         price,
         description,
         capacity,
         planeImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
      })

      res.status(201).json(plane)
   } catch (e) {
      errorHandler(res, e)
   }
}

module.exports = {
   getPlanes,
   createPlanes,
   getIdPlanes,
}
