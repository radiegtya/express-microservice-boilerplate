import { Router } from 'express'

import Controllers from './controllers'
import validation from './middlewares/validation'

const router = Router()
const ctrl = new Controllers()

router.get('/', ctrl.index)
router.post('/', validation, ctrl.create)

router.get('/:id', ctrl.show)
router.put('/:id', validation, ctrl.update)
router.delete('/:id', ctrl.delete)

export default router
