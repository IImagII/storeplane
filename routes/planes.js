const express = require('express')
const router = express.Router()
const path = require('path')
const { getPlanes, createPlanes, getIdPlanes } = require('../controllers/planes')
const multer = require('multer')

//Показываем где хранить загружаемые картинки
const storage = multer.diskStorage({
   destination(req, file, cb) {
      cb(null, './assets/')
   },
   filename(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   },
})

const upload = multer({ storage })

//API /api/planes
router.get('/', getPlanes)

router.get('/:id', getIdPlanes)

router.post('/', upload.single('planeImage'), createPlanes)

module.exports = router
