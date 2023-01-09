import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'


const router = Router()

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)
router.get('/:id', booksCtrl.show)
router.post('/', booksCtrl.create)
router.delete('/:id', booksCtrl.delete)


export {
  router
}
